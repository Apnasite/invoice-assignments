class InvoiceComponent extends HTMLElement {
    // Default configuration
    defaultConfig = {
        containerClass: "invoice-container",
        backgroundClass: "invoice-background",
        rec1Class: "rect-top",
        rec2Class: "rect-bottom",
        taxDetailsClass: "tax-details",
        contentClass: "invoice-content",
        taxHeaderClass: "tax-header",
        customerDetailsClass: "customer-details",
        customerHeaderClass: "customer-header",
        billingDetailsClass: "billing-details",
        shippingDetailsClass: "shipping-details",
        tableClass: "content-table",
        tableHeaderClass: "content-header",
        totalClass:"total",
        amountDetailsClass:"amount-details",
        footerClass: "invoice-footer"
    };

    // Default data
    defaultData = {
        taxDetails: {
            invoiceNo: 'Fucha367',
            invoiceDate: '19/02/2025 13:55:01',
            pONumber: 'Single overline',
            firmFoodLicNo: 'Doughnut',
        },
        customerDetails: {
            heading: 'Rader',
            subHeading: 'Legend title',
            state: 'MAHARASHTRA',
            stateCode: '27',
            ph: 'Double overline/Font Name',
            firmGstIn:'Drill Down'
        },
        billingDetails: {
            heading: 'Details of Receiver (Billed to)',
            subHeading: 'Fuchsia',
            description: 'sundayNavy',
            state: 'MAHARASHTRA',
            stateCode: '27',
            beat: 'Currency',
            gstInUniqueId: 'Sunday',
            pcName: '',
            phone: 'Mail Label /',
            salesManNo: 'Font Strikeout'
        },
        shippingDetails: {
            heading: 'Details of Receiver (Shipped to)',
            subHeading: 'Fuchsia',
            description: 'sunday',
            state: 'MAHARASHTRA',
            stateCode: '27',
            gstInUniqueId: 'Sunday',
            foodLicNo: 'Legend title'
        },
        particulars: [
            {
                SR: '1',
                'Product Name': 'Silver',
                HSN: 'Friday',
                MRP: '110',
                Unit: 'Cross',
                QTY: '17.26',
                FREE: '267.31',
                Rate: '194.85',
                'Disc Amt': '554.06',
                'Taxable Amt': '14062.94',
                CGST: { '%': '83.53', Amount: '90.74' },
                SGST: { '%': '83.53', Amount: '41.26' },
                'Net Amt': '14062.9'
            },
            {
                SR: '2',
                'Product Name': 'Gold',
                HSN: 'Thursday',
                MRP: '150',
                Unit: 'Box',
                QTY: '10.00',
                FREE: '100.00',
                Rate: '200.00',
                'Disc Amt': '300.00',
                'Taxable Amt': '17000.00',
                CGST: { '%': '9.00', Amount: '765.00' },
                SGST: { '%': '9.00', Amount: '765.00' },
                'Net Amt': '18530.00'
            }
        ],
         total:{
            totalValueRS:'One Hundred Eighty-Six And Sixty-two Paisa Only',
            description:'Certified that the particulars given above are true and correct and the amount indicated.',
            subHeading:'Cheque Bounce Charges Rs.500/-',
            fssaiNo:'Doughnut',
            for:'Number'
        },
        amountDetails:{
            taxableAmt:'-353.03.',
            gstAmt:'136.84',
            transport:'282.72',
            creditAmt:'37.10',
            debitAmt:'83.39',
            rounding:'165.87',
            netAmount:'186.62'
        }      
    };

    constructor() {
        super();
        this.config = this.defaultConfig;
        this.data = this.defaultData;

        // Create Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Load external CSS
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', './css/style.css'); // Adjust path as needed
        shadow.appendChild(linkElement);

        // Create container element
        this.container = document.createElement('div');
        shadow.appendChild(this.container);
    }

    static get observedAttributes() {
        return ['config', 'data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'config' && newValue) {
                try {
                    const customConfig = JSON.parse(newValue);
                    this.config = { ...this.defaultConfig, ...customConfig };
                } catch (e) {
                    console.error('Invalid config JSON:', e);
                }
            }
            if (name === 'data' && newValue) {
                try {
                    this.data = JSON.parse(newValue);
                } catch (e) {
                    console.error('Invalid data JSON:', e);
                }
            }
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.container.innerHTML = ''; // Clear previous content

        const config = this.config || this.defaultConfig;
        const data = this.data || this.defaultData;

        const wrapper = this.createElement("div", config.backgroundClass);
        wrapper.appendChild(this.renderBackground());

        this.container.className = config.containerClass;

        const content = document.createElement('div');
        content.className = config.contentClass;

        content.appendChild(this.renderTaxDetails());
        content.appendChild(this.renderCustomerDetails());
        content.appendChild(this.renderBillingDetails());
        content.appendChild(this.renderShippingDetails());
        content.appendChild(this.renderItemsTable());
        content.appendChild(this.renderTotal());
        content.appendChild(this.renderAmountDetails());
        content.appendChild(this.renderFooter());


        wrapper.appendChild(content);
        this.container.appendChild(wrapper);
    }

    renderBackground() {
        const div = this.createElement("div", this.config.backgroundClass);
        div.appendChild(this.createElement("div", this.config.rec1Class));
        div.appendChild(this.createElement("div", this.config.rec2Class));
        return div;
    }

    renderTaxDetails() {
        const tax = this.data.taxDetails || {};
        const div = this.createElement('div', this.config.taxDetailsClass);
        div.appendChild(this.createElement("div", this.config.taxHeaderClass, "TAX-INVOICE"));
        div.appendChild(this.createElement('div', "invoice-no", `Invoice No: ${tax.invoiceNo || ''}`));
        div.appendChild(this.createElement('div', "invoice-date", `Invoice Date: ${tax.invoiceDate || ''}`));
        div.appendChild(this.createElement('div', "po-number", `PO Number: ${tax.pONumber || ''}`));
        div.appendChild(this.createElement('div', "firm-food-lic-no", `Firm Food Lic No: ${tax.firmFoodLicNo || ''}`));
        return div;
    }

    renderCustomerDetails() {
        const d = this.data.customerDetails || {};
        const div = this.createElement("div", this.config.customerDetailsClass);
        div.appendChild(this.createElement("div", this.config.customerHeaderClass, "Number"));
        div.appendChild(this.createElement("div", "heading", d.heading || ""));
        div.appendChild(this.createElement("div", "subHeading", d.subHeading || ""));
        div.appendChild(this.createElement("div", "state", `State: ${d.state || ""}  State Code: ${d.stateCode || ""}`));
        div.appendChild(this.createElement("div", "ph", `Ph: ${d.ph || ""}`));
        div.appendChild(this.createElement("div", "firmGstIn", `FIRM GSTIN ${d.firmGstIn || ""}`));
        return div;
    }

    renderBillingDetails() {
        const d = this.data.billingDetails || {};
        const div = this.createElement("div", this.config.billingDetailsClass);
        div.appendChild(this.createElement("div", "heading", d.heading || ""));
        div.appendChild(this.createElement("div", "subHeading", d.subHeading || ""));
        div.appendChild(this.createElement("div", "description", d.description || ""));
        div.appendChild(this.createElement("div", "state", `State: ${d.state || ""}`));
        div.appendChild(this.createElement("div", "stateCode", `State Code: ${d.stateCode || ""}`));
        div.appendChild(this.createElement("div", "beat", `BEAT: ${d.beat || ""}`));
        div.appendChild(this.createElement("div", "gstInUniqueId", `GSTIN/UNIQUE ID : ${d.gstInUniqueId || ""}`));
        div.appendChild(this.createElement("div", "pcName", `PC Name: ${d.pcName || ""}`));
        div.appendChild(this.createElement("div", "phone", `Phone: ${d.phone || ""}`));
        div.appendChild(this.createElement("div", "salesManNo", `SalesMan No: ${d.salesManNo || ""}`));
        return div;
    }

    renderShippingDetails() {
        const d = this.data.shippingDetails || {};
        const div = this.createElement("div", this.config.shippingDetailsClass);
        div.appendChild(this.createElement("div", "heading", d.heading || ""));
        div.appendChild(this.createElement("div", "subHeading", d.subHeading || ""));
        div.appendChild(this.createElement("div", "description", d.description || ""));
        div.appendChild(this.createElement("div", "state", `State: ${d.state || ""}`));
        div.appendChild(this.createElement("div", "stateCode", `State Code: ${d.stateCode || ""}`));
        div.appendChild(this.createElement("div", "gstInUniqueId", `GSTIN/UNIQUE ID : ${d.gstInUniqueId || ""}`));
        div.appendChild(this.createElement("div", "foodLicNo", `Food Lic No: ${d.foodLicNo || ""}`));
        return div;
    }

    renderItemsTable() {
        const itemsDiv = this.createElement("div", "items");
        const table = this.createElement("table", this.config.tableClass);
        const items = this.data.particulars || [];

        if (!items.length) {
            table.appendChild(this.createElement("caption", null, "No items"));
            itemsDiv.appendChild(table);
            return itemsDiv;
        }

        const allKeys = Array.from(new Set(items.flatMap(item => Object.keys(item))));
        const thead = this.createElement("thead");
        const headerRow = this.createElement("tr");
        allKeys.forEach(key => headerRow.appendChild(this.createTableHeaderCell(key)));
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = this.createElement("tbody");
        items.forEach(item => {
            const row = this.createElement("tr");
            allKeys.forEach(key => {
                const value = item[key];
                const cellContent = typeof value === 'object' && value !== null
                    ? this.formatNestedObject(value)
                    : value;
                row.appendChild(this.createTableCell(cellContent));
            });
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        itemsDiv.appendChild(table);
        return itemsDiv;
    }

    formatNestedObject(obj) {
        return Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join(', ');
    }

    createTableHeaderCell(text) {
        return this.createElement("th", null, text.charAt(0).toUpperCase() + text.slice(1));
    }

    createTableCell(text) {
        return this.createElement("td", null, text == null ? "" : String(text));
    }

    renderTotal() {
        const d = this.data.total || {};
        const div = this.createElement("div", this.config.totalClass);
        div.appendChild(this.createElement("div", "totalValueRS", `Total Value RS: ${d.totalValueRS || ""}`));
        div.appendChild(this.createElement("div", "description", d.description || ""));
        div.appendChild(this.createElement("div", "subHeading", d.subHeading || ""));
        div.appendChild(this.createElement("div", "fssaiNo", `FSSAI No: ${d.fssaiNo || ""}`));
        div.appendChild(this.createElement("div", "for", `For  ${d.for || ""}`));
        div.appendChild(this.createElement("div", "sign", "Authorized Signature"));
        return div;
    }
    renderAmountDetails () {
        const d = this.data.amountDetails || {};
        const div = this.createElement("div", this.config.amountDetailsClass);
        div.appendChild(this.createElement("div", "taxableAmt", `TAXABLE AMT | ${d.taxableAmt || ""}`));
        div.appendChild(this.createElement("div", "gstAmt",`GST AMT ${d.gstAmt || ""}`));
        div.appendChild(this.createElement("div", "transport", `Transport  ${d.transport || ""}`));
        div.appendChild(this.createElement("div", "creditAmt", `Credit Amt : | ${d.creditAmt || ""}`));
        div.appendChild(this.createElement("div", "debitAmt", `Debit Amt :  |  ${d.debitAmt || ""}`));
        div.appendChild(this.createElement("div", "rounding", `ROUNDING :  ${d.rounding || ""}`));
        div.appendChild(this.createElement("div", "netAmount", `NET AMOUNT  ${d.netAmount || ""}`));
        
        return div;
    }
    renderFooter() {
       const div = this.createElement("div", this.config.footerClass);
       div.appendChild(this.createElement("div", null, "Receivers Stamp & Sign."));
       return div;
    }

    createElement(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    }
}

// Define the custom element
customElements.define('invoice-component', InvoiceComponent);
if (!window.customElements) window.customElements = [];
window.customElements.push(
    { component: "invoice-component", componentClass: InvoiceComponent }
    
);
