import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/GetLastThreeMessagesService";

class GetLastThreeMessagesController {
  async handle(request: Request, response: Response){
    const service = new GetLastThreeMessagesService();
    try {
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      return response.json({error: err.message});
    }
    
  }
}

export { GetLastThreeMessagesController }