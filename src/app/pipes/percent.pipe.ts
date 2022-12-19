import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentPipe'
})

export class PercentPipe implements PipeTransform {
    transform(value: number, total: number) {
        return (value * 100 / total)+'%'
    }
}