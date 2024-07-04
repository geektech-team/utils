export interface EnumItem {
  value: string | number; // 枚举值
  display: string; // 名称
  alias?: number; // 别名
}

export class EnumModel {
  constructor(private enums: EnumItem[] = []) {
    enums.forEach(({ value, display, alias }) => {
      this.addEnum(value, display, alias);
    });
  }

  addEnum(value: string | number, display: string, alias?: number) {
    if (!this.getEnum(value)) this.enums.push({ value, display, alias });
  }

  deleteEnum(value: string | number) {
    const deleteEnumIndex = this.enums.findIndex(item => item.value === value);
    if (deleteEnumIndex >= 0) this.enums.splice(deleteEnumIndex, 1);
  }

  getEnum(enumValue: string | number): EnumItem | null {
    return this.enums.find(({ value }) => value === enumValue) || null;
  }

  displayOf(enumValue: string | number, defaultDisplay = '') {
    const enumItem = this.getEnum(enumValue);
    return enumItem?.display ?? defaultDisplay;
  }

  getEnumValues(): EnumItem['value'][] {
    return this.enums.map(({ value }) => value);
  }

  getEnums(): EnumItem[] {
    return this.enums.map(item => item);
  }
}
