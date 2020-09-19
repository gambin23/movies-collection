import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name: "truncate"
})

export class TruncatePipe implements PipeTransform {

transform(value: string, args: any[]): string {
    const charLimit = args.length > 0 ? parseInt(args[0], 10) : 50;
    const trail = args.length > 1 ? args[1] : "…";
    return value.length > charLimit ? value.substring(0, charLimit) + trail : value;
   }
}
