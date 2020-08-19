import { controller, httpGet, interfaces } from "inversify-express-utils";
import { Request, Response } from "express";

@controller("/room")
export class ChatRoomController implements interfaces.Controller {
  @httpGet("/")
  private index(req: Request, res: Response) {
    return res.json(false);
  }
}
