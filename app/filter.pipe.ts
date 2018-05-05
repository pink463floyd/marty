import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
      console.log("in filter!")
      console.log(searchText)
      console.log(items.length)
      console.log(items[0].Date)
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( it => {
      //return it.toLowerCase().includes(searchText);
      console.log(it)
      if (it.Date == searchText) {
          return true;
      } else {
          return false;
      }
    });
   }
}
