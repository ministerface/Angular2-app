import {Pipe} from '@angular/core';

@Pipe({
    name: 'CategoryPipe'
})

export class CategoryPipe {
    transform(items = [], args) {
        const filteredData = [];
        items.map(
            (item) => {
                if (item.category_id === args) {
                    filteredData.push(item);
                }
            }
        );
        return filteredData;
    }
}
