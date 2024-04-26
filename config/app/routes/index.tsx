import { NotFound } from "@brysonandrew/not-found";
import {
  TRouteObjects,
  resolveRouteRecords,
} from "@brysonandrew/routes";
import { Shell } from "~/shell";
import * as Pages from "~/pages";

export const routeRecords =
  resolveRouteRecords<
    keyof typeof Pages,
    typeof Pages
  >(
    [
      "Index",
      "DirectorsMode",
      "VideoPlayer",
    ],
    Pages
  );
export const {
  record,
  routes,
  values,
} = routeRecords;
export const ROUTES: TRouteObjects = [
  {
    path: "/",
    Component: Shell,
    children: [
      ...routes,
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];
export const HOME_ROUTE = record.index;
