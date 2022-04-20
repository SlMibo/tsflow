const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: 'mediapipe', // or 'tfjs',
  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
  modelType: 'full'
}
const detector = await handPoseDetection.createDetector(model, detectorConfig);

const hands = await detector.estimateHands(image);