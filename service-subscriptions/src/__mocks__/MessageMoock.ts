import { RoomMessageProps } from "../app/UseCases/UseCaseRoomMessage";
import cryto from "crypto";

export default function MessageMoock() {
  return {
    message: {
      message: 'Hello, ready to "Play"',
      date: new Date().toLocaleString(),
      user: { username: 'Juan torres', avatar: 'https://resources/image.jpg' },
    },
    room : {
      roomID : cryto.randomBytes(16).toString("hex")
    }
  } as RoomMessageProps;
}
