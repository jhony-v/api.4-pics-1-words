export default class ResponseJsonHateoas {
  /**
   * @param status status of response
   * @param data main content to show
   * @param meta other props how status, metas, links
   * @returns {Object} {content:data, meta}
   */
  static send( status : boolean = false,data: any = null ,  meta: Object = {}): Object {
    return {
      status,
      ...meta,
      ...(data && {content:data}),
    };
  }
}
