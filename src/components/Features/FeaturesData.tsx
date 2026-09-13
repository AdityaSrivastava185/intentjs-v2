import FeatureController from "./features/controllers";
import FeatureMiddleware from "./features/middlewares";
import FeatureConsole from "./features/console";
import FeatureCache from "./features/cache";
import FeatureFileStorage from "./features/file-storage";
import FeatureHelpers from "./features/helpers";
import FeatureLocalization from "./features/localization";
import FeatureLogging from "./features/logging";
import FeatureMailers from "./features/mailers";
import FeatureQueues from "./features/queue";
import FeatureTaskScheduling from "./features/task-scheduling";

export const FEATURES_DATA = [
  {
    title: "Controllers",
    content: <FeatureController />,
  },
  // {
  //   title: "Providers (Dependency Injection)",
  //   content: <FeatureProviders />,
  // },
  {
    title: "Middleware",
    content: <FeatureMiddleware />,
  },
  { title: "Console", content: <FeatureConsole /> },
  {
    title: "Cache",
    content: <FeatureCache />,
  },
  { title: "File Storage", content: <FeatureFileStorage /> },
  { title: "Helpers", content: <FeatureHelpers /> },
  { title: "Localization", content: <FeatureLocalization /> },
  // { title: "Logging", content: <FeatureLogging /> },
  { title: "Mailers", content: <FeatureMailers /> },
  { title: "Task Scheduling", content: <FeatureTaskScheduling /> },
  { title: "Queues", content: <FeatureQueues /> },
];
