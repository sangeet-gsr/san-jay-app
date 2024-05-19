let items = [
  {
    item: "Burger",
    category: "Dine out",
    price: 12.45,
    date: "2024-05-12",
  },
  {
    item: "Eggs",
    category: "Groceries",
    price: 84,
    date: "2024-04-14",
  },
  { item: "Rent", category: "Housing", price: 14, date: "2024-04-18" },
  {
    item: "Table",
    category: "Entertainment",
    price: 59,
    date: "2024-03-11",
  },
  {
    item: "Checking Account",
    category: "Debt",
    price: 33,
    date: "2024-04-28",
  },
  {
    item: "Car",
    category: "Entertainment",
    price: 47,
    date: "2023-11-18",
  },
  {
    item: "Pizza",
    category: "Dine out",
    price: 67,
    date: "2024-04-20",
  },
  {
    item: "Mouse",
    category: "Entertainment",
    price: 20,
    date: "2024-05-05",
  },
  { item: "Shirt", category: "Clothing", price: 37, date: "2024-04-12" },
  {
    item: "Mini Focus",
    category: "Transportation",
    price: 55,
    date: "2023-09-11",
  },
  {
    item: "Haircut",
    category: "Personal care",
    price: 20,
    date: "2024-05-16",
  },
  {
    item: "Home Loan Account",
    category: "Debt",
    price: 34,
    date: "2024-02-05",
  },
];

const categories = [
  "Housing",
  "Groceries",
  "Dine out",
  "Transportation",
  "Debt",
  "Personal care",
  "Entertainment",
  "Clothing",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2033",
  "2034",
  "2035",
  "2036",
  "2037",
  "2038",
  "2039",
  "2040",
  "2041",
  "2042",
  "2043",
  "2044",
  "2045",
  "2046",
  "2047",
  "2048",
  "2049",
  "2050",
  "2051",
  "2052",
  "2053",
  "2054",
  "2055",
  "2056",
  "2057",
  "2058",
  "2059",
  "2060",
  "2061",
  "2062",
  "2063",
  "2064",
  "2065",
  "2066",
  "2067",
  "2068",
  "2069",
  "2070",
  "2071",
  "2072",
  "2073",
  "2074",
  "2075",
  "2076",
  "2077",
  "2078",
  "2079",
  "2080",
  "2081",
  "2082",
  "2083",
  "2084",
  "2085",
  "2086",
  "2087",
  "2088",
  "2089",
  "2090",
  "2091",
  "2092",
  "2093",
  "2094",
  "2095",
  "2096",
  "2097",
  "2098",
  "2099",
];

const app = Vue.createApp({
  data() {
    return {
      message: "first-app",
      item: "",
      category: "",
      price: null,
      date: new Date().toISOString().substring(0, 10),
      categories: categories,
      months: months,
      years: years,
      selectedMonth: months[new Date().getMonth()],
      selectedYear: String(new Date().getFullYear()),
      items: items,
    };
  },
  methods: {
    addItem() {
      if (this.item === "" || this.category === "" || this.price === null) {
        return;
      }
      this.items.push({
        item: this.item,
        category: this.category,
        price: this.price,
        date: this.date,
      });
      this.item = "";
      this.category = "";
      this.price = null;
      (this.date = new Date().toISOString().substring(0, 10)),
        console.log(this.items);
    },
    formatDate(value) {
      if (!value) return "";
      return dayjs(value).format("DD-MMM-YYYY");
    },
  },
  watch: {
    selectedMonth(value) {
      this.items = items.filter(
        (item) =>
          dayjs(item.date).format("MMMM") === value &&
          dayjs(item.date).format("YYYY") === this.selectedYear
      );
      console.log(this.items);
    },
    selectedYear(value) {
      this.items = items.filter(
        (item) =>
          dayjs(item.date).format("MMMM") === this.selectedMonth &&
          dayjs(item.date).format("YYYY") === value
      );
    },
  },
});

app.mount("#app");
