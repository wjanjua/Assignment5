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
    
    objRequest.open("GET",url,true);
    objRequest.send();
    
}

function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count <result.GetAllCustomersResult.length; count++)
    {
        displaytext += result.GetAllCustomersResult[count].CustomerName + "," + result.GetAllCustomersResult[count].CustomerId + "," + result.GetAllCustomersResult[count].City + "<br>";   
    }
    
    document.getElementById("customerlist").innerHTML = displaytext;
}

//section 2
function CustomerOrderHistory()
{
    var objRequest = new XMLHttpRequest();
    var urltwo = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    urltwo += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutputtwo(output);
        }
        
    }
    
    objRequest.open("GET", url2, true);
    objRequest.send();
    
}

function GenerateOutputtwo(result)
{
    var count = 0;
    var displaytexttwo = "";
    
    for (count = 0; count < result.GetCustomerOrderHistory.length; count++)
    {
        displaytexttwo += result.GetCustomerOrderHistory[count].ProductNames + "," + result.GetCustomerOrderHistory[count].QuantitiesOrdered + "<br>";
        
    }
    
    document.getElementById("orderhistory").innerHTML = displaytexttwo;
}

//section 3
function OrdersPlaced()
{
    var objRequest = new XMLHttpRequest();
    var urlthree = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    urlthree += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutputthree(output);
        }
        
    }
    
    objRequest.open("GET", urlthree, true);
    objRequest.send();
    
}

function GenerateOutputthree(result)
{
    var count = 0;
    var displaytextthree = "";
    
    for (count = 0; count < result.GetOrdersForCustomer.length; count++)
    {
        displaytextthree += result.GetOrdersForCustomer[count].OrderDate + "," + result.GetOrdersForCustomer[count].OrderID + "," + result.GetOrdersForCustomer[count].ShipAddress + "," + result.GetOrdersForCustomer.ShipCity + "," + result.GetOrdersForCustomer.ShipName + "," + result.GetOrdersForCustomer.ShipPostCode + "," + result.GetOrdersForCustomer.ShippedDate + "<br>";
        
    }
    
    document.getElementById("placeorders").innerHTML = displaytextthree;
}