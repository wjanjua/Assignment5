//Menu
function MenuChoice()
{
    
    if (document.getElementById("menu").value == "Display customer list")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Display customer's order history")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Display list of orders placed by customer")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}

//section 1    
function Generatecustomerlist()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers/";
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
        
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count < result.GetAllCustomersResult.length; count++)
    {
        displaytext += result.GetAllCustomersResult[count].CustomerName + "," + result.GetAllCustomersResult[count].CustomerID + "," + result.GetAllCustomersResult[count].City + "<br>";   
    }
    
    document.getElementById("customerlist").innerHTML = displaytext;
}

//section 2
function CustomerOrderHistory()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput2(output);
        }
        
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateOutput2(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count < result.GetCustomerOrderHistory.length; count++)
    {
        displaytext += result.GetCustomerOrderHistory[count].ProductNames + "," + result.GetCustomerOrderHistory[count].Quantities + "<br>";
        
    }
    
    document.getElementById("orderhistory").innerHTML = displaytext;
}

//section 3
function OrdersPlaced()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput3(output);
        }
        
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateOutput3(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count < result.GetOrdersForCustomer.length; count++)
    {
        displaytext += result.GetOrdersForCustomer[count].OrderDate + "," + result.GetOrdersForCustomer[count].OrderID + "," + result.GetOrdersForCustomer[count].ShipAddress + "," + result.GetOrdersForCustomer.ShipCity + "," + result.GetOrdersForCustomer.ShipName + "," + result.GetOrdersForCustomer.ShipPostCode + "," + result.GetOrdersForCustomer.ShippedDate + "<br>";
        
    }
    
    document.getElementById("placeorders").innerHTML = displaytext;
}