import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "truncate" })
export class TruncatePipe implements PipeTransform {

    transform(value: string, limit?: number): string {
        limit = limit ? limit : 50;
        return value.length > limit ? value.substring(0, limit) + "…" : value;
    }
}
