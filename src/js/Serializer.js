export default class Serializer {
  constructor(element) {
    this.element = element;
  }
  verification() {
    if (!/^\d+$/.test(this.element)) {
      return "Unknown";
    }
    if (/^4/.test(this.element) && this.element.length === 16) {
      return "visa";
    } else if (/^5/.test(this.element) && this.element.length === 16) {
      return "master";
    } else if (/^3[47]/.test(this.element) && this.element.length === 15) {
      return "amex";
    } else if (
      /^(6011|622[1][2][6-9]|622[2-8][0-9][0-9]|622[9][0-1][0-9]|622[9][2][0-5]|64[4-9]|65\d)/.test(this.element) &&
      this.element.length === 16
    ) {
      return "discover";
    } else if (
      /^(36|38|39|30[0-5]\d)/.test(this.element) &&
      this.element.length === 14
    ) {
      return "diners_club";
    } else if (/^(35\d)/.test(this.element) && this.element.length === 16) {
      return "jcb";
    } else if (
      /^(5018|5020|5038|5893|6304|6759|676[1-3]|0604.{10,16}$\d)/.test(
        this.element,
      ) &&
      this.element.length > 11 &&
      this.element.length < 19
    ) {
      return "Maestro";
    } else if (
      /^(2\d)/.test(this.element) &&
      this.element.length > 15 &&
      this.element.length < 19
    ) {
      return "world";
    } else {
      return "Unknown";
    }
  }
}
