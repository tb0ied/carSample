const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "Daily location total",
];

function SalmonCookieStand(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

const table = document.querySelector("table");
const tableHead = table.createTHead();
const thRow = tableHead.insertRow(0);

// here and below
const cityTh = document.createElement("th");
cityTh.textContent = "City";
thRow.appendChild(cityTh);

// Add 16 hours cells
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  thRow.appendChild(th);
}

SalmonCookieStand.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.round(randNum * this.avgCookiesPerCust));
    this.totalCookieSold += this.cookiesPerHour[i];
  }
};

SalmonCookieStand.prototype.renderSales = function () {
  const salesList = document.createElement("tr");
  salesList.innerHTML = `<td>${this.location}</td>`;

  for (let i = 0; i < hours.length - 1; i++) {
    const listItem = document.createElement("td");
    listItem.textContent = `${this.cookiesPerHour[i]} cookies`;
    salesList.appendChild(listItem);
  }

  const totalListItem = document.createElement("td");
  totalListItem.textContent = `Total: ${this.totalCookieSold} cookies`;
  salesList.appendChild(totalListItem);

  const salesContainer = document.getElementById(`sales-table`);
  salesContainer.appendChild(salesList);
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = new SalmonCookieStand("Seattle", 23, 65, 6.3);
const tokyo = new SalmonCookieStand("Tokyo", 3, 24, 1.2);
const dubai = new SalmonCookieStand("Dubai", 11, 38, 3.7);
const paris = new SalmonCookieStand("Paris", 20, 38, 2.3);
const lima = new SalmonCookieStand("Lima", 2, 16, 4.6);

seattle.calculateSales();
tokyo.calculateSales();
dubai.calculateSales();
paris.calculateSales();
lima.calculateSales();

// Render for all loc
seattle.renderSales();
tokyo.renderSales();
dubai.renderSales();
paris.renderSales();
lima.renderSales();
