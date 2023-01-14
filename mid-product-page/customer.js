var customers = [{
  qty: "1",
  item: "SAMSUNG S22",
  price: 25900,
  discount: 3000,
  amount:"22900",
},
{
  qty: "1",
  item: "SAMSUNG S23",
  price: 27900,
  discount: 1000,
  amount:"26900",
},
{
  qty: "1",
  item: "SAMSUNG S22+",
  price: 30000,
  discount: 1000,
  amount:"29000",
},
{
  qty: "1",
  item: "SAMSUNG S23+",
  price: 32000,
  discount: 1000,
  amount:"31000",
},
{
  qty: "1",
  item: "SAMSUNG S21",
  price: 25900,
  discount: 1000,
  amount:"25800",
},
{
  qty: "1",
  item: "SAMSUNG S21+",
  price: 30000,
  discount: 1000,
  amount:"29000",
},

  
]

// $(document).ready(function () {
//     console.log("ready!");
//     // load data
//     $.ajax({
//         url: "data.json"
//     }).done(function (data) {
//         //$(this).addClass("done");
//         console.log("DONE",data)
//         for(let d in data){
//             // save the data record into our global variable
//             customers.push(data[d])
//             let dataStr = `<tr>
//                 <td>${data[d].name}</td>
//                 <td>${data[d].email}</td>
//                 <td>${data[d].phone}</td>
//             </tr>`
//             $("#data-table tr:last").after(dataStr)
//         }

//         console.log(customers)
//     });
// });

function addTocustomer() {
  let customerObj = {
    quantity: $("#qtyInput").val(),
    item: $("#itemInput").val(),
    price: $("#priceInput").val(),
    discount: $("#discountInput").val(),
  };

  $("#customersBody").html("");

  customers.push(customerObj)
  loadData()
}
function clearQuatation() {
  customers = [];
  loadData();
}

function deleteCustomer(index) {
  console.log("DELETE", index)
  delete customers[index]
  $("#customerBody").html("")
  loadData()
}
function loadData() {
  let allRows = ""
  for (let p in customers) {
    let cellqty = `<td><img class='icon' src='img/delete_icon.jpg' onclick='deleteCustomer("${p}")'>` + customers[p].qty + "</td>"
    let cellitem = `<td class="text_center">` + customers[p].item + "</td>"
    let cellprice = `<td class="text_center">` + customers[p].price + "</td>"
    let celldiscount = `<td class="text_center">` + customers[p].discount + "</td>"
    let cellamount = `<td class="text_center">` + customers[p].amount + "</td>"
    let row = `<tr>${cellqty}${cellitem}${cellprice}${celldiscount}${cellamount} </tr>`
    allRows += row
  }
  $("#customerBody").html(allRows)

}
