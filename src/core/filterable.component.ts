export abstract class FilterableComponent {

  searchString = '';
  filteredData = [];

  constructor() {}

  abstract getData();

  filter() {
    const keyword = this.searchString.toLocaleLowerCase();
    this.filteredData = this.getData().filter(dataRow => {
      for (const prop in dataRow) {
        if (prop && this.isMatch(dataRow[prop], keyword)) {
          return true;
        }
      }

      return false;
    });
  }

  private isMatch(prop: any, keyword: string) {
    const propType = typeof prop;
    if (propType === 'object') {
      prop = JSON.stringify(prop);
      console.log('this is an object');
    } else if (propType !== 'string') {
      prop = prop.toString();
      console.log('this is a string');
    }
    return prop.toLowerCase().indexOf(keyword) >= 0;
  }
}
