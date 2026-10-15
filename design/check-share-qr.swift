import Foundation
import Vision
for path in CommandLine.arguments.dropFirst() {
 let request = VNDetectBarcodesRequest()
 request.symbologies = [.qr]
 try VNImageRequestHandler(url: URL(fileURLWithPath: path), options: [:]).perform([request])
 let codes = (request.results ?? []).compactMap { $0.payloadStringValue }
 print(URL(fileURLWithPath: path).lastPathComponent + ": " + codes.joined(separator: ", "))
 guard codes.contains("https://apps.apple.com/app/id6783860401") else { exit(1) }
}
