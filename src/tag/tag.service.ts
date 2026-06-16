import { Injectable } from "@nestjs/common";


@Injectable()
export class TagService {
    getAll(){
        return ['sky', 'sea', 'mountain', 'Ocean'];
    }
}