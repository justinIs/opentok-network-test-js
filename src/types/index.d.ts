/**
 * @module Types/NetworkTest
 */

/**
 * Define global types
 */

interface OpenTok {
  initSession: (partnerId: string, sessionId: string) => OT.Session;
  initPublisher: (targetElement?: HTMLElement | string, properties?: OT.PublisherProperties, callback?: (error?: OT.OTError) => void) => OT.Publisher;
  getDevices(callback: (error: OT.OTError | undefined, devices?: OT.Device[]) => void): void;
  properties: OT.Properties
}

type SessionCredentials = {
  apiKey: string,
  sessionId: string,
  token: string
}
type OpenTokEnvironment = 'standard' | 'enterprise'
type CompletionCallback<A> = (error: Error | undefined, results: A | null) => void
type UpdateCallback<A> = (stats: OT.SubscriberStats) => void
type TestQualityResults = {
  mos: number,
  audio: {
    bandwidth: number
  },
  video: {
    bandwidth: number
  },
}

type AV = 'audio' | 'video';
type DeviceId = string;
type InputDeviceType = 'audioInput' | 'videoInput';
type DeviceOptions = {
  audioDevice?: DeviceId,
  videoDevice?: DeviceId
}

type QualityTestConfig = {
  getStatsInterval: number,
  getStatsVideoAndAudioTestDuration: number,
  getStatsAudioOnlyDuration: number,
  subscribeOptions: {
    testNetwork: boolean,
    audioVolume: number,
  },
  minimumVideoAndAudioTestSampleSize: number,
  steadyStateSampleWindow: number, // this is also used to calculate bandwidth
  steadyStateAllowedDelta: number, //
};

type StatsListener = (error?: OT.OTError, stats?: OT.SubscriberStats) => void;
type MOSResultsCallback = (qualityScore: number, bandwidth: Bandwidth) => void;
interface Kbps { kbps: number }
interface KbpsMap {
  audio: Kbps[];
  video: Kbps[];
}
interface Bandwidth {
  audio: number;
  video: number;
}