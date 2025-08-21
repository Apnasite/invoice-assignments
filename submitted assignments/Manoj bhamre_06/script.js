// Function to calculate totals
function calculateTotal() {
    let subtotal = 0;
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let price = parseFloat(row.querySelector(".price").textContent.replace('Rs.', ''));
        let qty = parseInt(row.querySelector(".qty").textContent);
        let total = price * qty;
        
        // Update the total column for the row
        row.querySelector(".total").textContent = "Rs." + total.toFixed(2);
        
        // Update the subtotal
        subtotal += total;
    });

    // Update the subtotal, tax, and total in the footer
    document.querySelector(".subtotal").textContent = "Rs." + subtotal.toFixed(2);
    
    let tax = subtotal * 0.00; // Assuming 0% tax
    document.querySelector(".tax").textContent = "0.00%";
    
    let totalAmount = subtotal + tax;
    document.querySelector(".grand-total").textContent = "Rs." + totalAmount.toFixed(2);
}

// Call the function on page load
window.onload = function() {
    calculateTotal();
};
