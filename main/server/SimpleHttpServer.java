import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.InetSocketAddress;
import java.nio.file.*;

public class SimpleHttpServer {
    public static void main(String[] args) throws IOException {
        int port = 80; // you can keep 8080 if 80 is blocked
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        System.out.println("Server running at http://iteach.com");

        // Serve files relative to the parent of current directory
        File root = new File("..").getCanonicalFile();

        server.createContext("/", exchange -> {
            String path = exchange.getRequestURI().getPath();
            if (path.equals("/")) path = "/main.html"; // or index.html if that’s your homepage

            File file = new File(root, path);
            if (!file.exists() || file.isDirectory()) {
                String notFound = "404 Not Found";
                exchange.sendResponseHeaders(404, notFound.length());
                OutputStream os = exchange.getResponseBody();
                os.write(notFound.getBytes());
                os.close();
                return;
            }

            // Guess MIME type
            String mime = Files.probeContentType(file.toPath());
            if (mime == null) mime = "application/octet-stream";
            exchange.getResponseHeaders().add("Content-Type", mime);

            byte[] content = Files.readAllBytes(file.toPath());
            exchange.sendResponseHeaders(200, content.length);
            OutputStream os = exchange.getResponseBody();
            os.write(content);
            os.close();
        });

        server.start();
    }
}
