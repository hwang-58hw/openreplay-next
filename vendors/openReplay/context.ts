// Libraries
import { createContext } from "react";
import { IPayload } from "./reducer";

interface ITrackerContext {
  startTracking: () => void;
  initTracker: () => void;
  logEvent: (evnt: IPayload) => void;
  logIssue: (evnt: IPayload) => void;
}

const TrackerContext = createContext<ITrackerContext>({
  startTracking: () => {},
  initTracker: () => {},
  logEvent: () => {},
  logIssue: () => {},
});

export default TrackerContext;
