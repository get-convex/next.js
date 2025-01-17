export const enum RouteKind {
  /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */
  PAGES,
  /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */
  PAGES_API,
  /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */
  APP_PAGE,
  /**
   * `APP_ROUTE` represents all the API routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */
  APP_ROUTE,
}
