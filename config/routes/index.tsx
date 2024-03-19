import { Shell } from "@shell";
import {
  NotFound,
  resolveRouteRecords,
  TRouteObjects,
} from "@brysonandrew/routes";
import { TPageTitle } from "config/routes/config/types";
import * as Pages from "@pages/index";
import { Video } from "@pages/index/video";

export const PAGE_TITLES = Object.keys(
  Pages
) as TPageTitle[];

const PAGE_RECORDS =
  resolveRouteRecords<
    TPageTitle,
    typeof Pages
  >(PAGE_TITLES, Pages);

const HOME_ROUTE =
  PAGE_RECORDS.record.index?.path ??
  "/";
const ROUTES: TRouteObjects = [
  {
    path: HOME_ROUTE,
    Component: Shell,
    children: [
      ...PAGE_RECORDS.routes,
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export {
  PAGE_RECORDS,
  ROUTES,
  HOME_ROUTE,
};
