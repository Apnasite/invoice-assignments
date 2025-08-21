class InvoiceComponent extends HTMLElement {
  constructor() {
    super();
    this.config = this.defaultConfig();
    this.data = this.defaultData();
    this.render();
  }  

  static get observedAttributes() {
    return ["config", "data"];
  }

  connectedCallback() {
    this.addEventListener("document", (event) => {
      Object.assign(this.data, event.detail);
      this.render();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      try {
        if (name === "config" && newValue) {
          Object.assign(this.config, JSON.parse(newValue));
        }
        if (name === "data" && newValue) {
          Object.assign(this.data, JSON.parse(newValue));
        }
      } catch (e) {
        console.error(`Invalid ${name} JSON:`, e);
      }
      this.render();
    }
  }

  defaultConfig() {
    return {
      backgroundDiv: "invoice-wrapper",	   
	   
      backgroundClass: "invoice-background",
      buttonClass: "btn btn-primary",
      cir1Class: "cir-top-1",
	  dot1Class: "dot-top-1",
	  dot2Class: "dot-top-2",
	  dot3Class: "dot-top-3",
	  dot4Class: "dot-top-4",
	  dot5Class: "dot-top-5",
	  dot6Class: "dot-top-6", 
	  dot7Class: "dot-top-7", 
	  dot8Class: "dot-top-8", 
	  dot9Class: "dot-top-9", 
	  rec0Class: "rect-top-0",
	  rec1Class: "rect-top-1",
      rec2Class: "rect-top-2",
	  rec3Class: "rect-top-3",
	  rec4Class: "rect-top-4",
	  rec5Class: "rect-top-5",
	  rec6Class: "rect-top-6",
	  rec7Class: "rect-bottom-7",
	  rec8Class: "rect-bottom-8",
	  rec9Class: "rect-bottom-9",
	  
	  
      lineClass: "line1",
      contentClass: "invoice-content",	  
      titleClass: "invoice-title",
      headerClass: "invoice-header",
      logoClass: "invoice-header-logo",
      qrClass: "qr",
	  locClass: "loc",
	  phoneClass: "phone",
      detailsClass: "invoice-details",
      addressClass: "org-address",
      detailsHeaderClass: "details-header",
      tableClass: "content-table",
      tableHeaderClass: "content-header",
      rightAlignClass: "right-align",
      totalClass: "total-amount",
      bankDetailsClass: "bank-details",
      termsClass: "terms primary",
      footerClass: "invoice-footer",
    };
  }

  defaultData() {
    // You can move your large data object here for brevity
    return {

      "uid": "IN00000618",
      "category": "Sale",
      "type": "Sale",
      "remark": "Invoice against Order #OR00000709",
      "config": {
        "storageLocationId": "64097cc4462d5422fccd8e84"
      },
      "subTotal": 100,
      "discount": 64,
      "couponDiscount": 0,
      "discountedSubTotal": 100,
      "taxTotal": 0,
      "mrpTotal": 164,
      "previousDue": 0,
      "amount": 100,
      "roundOff": 0,
      "subTotalAmount": 100,
      "shippingCharges": 30,
      "shippingDiscount": 30,
      "paymentStatus": "Unpaid",
      "deliveryStatus": "ReturnProcessing",
      "invoiceDate": "2023-06-23T00:00:00.000Z",
      "dueDate": "2023-06-13T11:33:24.335Z",
	  "pricetotal": "$ 1000",
      "created": "2023-06-23T12:07:09.564Z",
      "modified": "2023-06-23T12:52:07.296Z",

      "Party": {
        "uid": "LDU7WXCR",
        "puid": "User",
        "name": "Ashvini Shetkar",
        "firstName": "Ashvini",
        "lastName": "Shetkar",
        "mobile": "+917517978898",
        "email": "vilasshetkar@gmail.com",
        "billingAddress": {
          "line1": "Hariom plaza",
          "line2": "Kalewadi",
          "location": "Pune H.O",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "india",
          "pincode": "411001"
        },
        "shippingAddress": {
          "line1": "Hariom plaza",
          "line2": "Kalewadi",
          "location": "Pune H.O",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "india",
          "pincode": "411001"
        },
        "address": {
          "line1": "Shop No. 8, Hari Om Plaza, Pune",
          "line2": "Kalewadi-Pimpri Main Road, Nadhe Nagar, Kalewadi",
          "line3": "Opp. Joytiba Temple",
          "location": "Kalewadi ",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "India",
          "pincode": "411017",
          "zoom": 14,
          "accuracy": 17.778,
          "latLng": {
            "lat": 18.61799689999999,
            "lng": 73.7917382,
          }
        },
        "bankDetails": {
          "accountNumber": "123456",
          "ifscCode": ""
        },
        "dob": "1990-02-02T00:00:00.000Z",
        "gender": "male",
        "joiningDate": "2023-03-14T00:00:00.000Z",
        "maritalStatus": "Married",
        "middleName": "ABCD",
        "pan": "DDDFG8765F",
        "userId": "63e243e0b8c48b22c885b4b9",
        "profilePicture": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        "InvoiceSalesSummary": {
          "mrpTotal": 2845514,
          "roundOff": 0.01999999999999999,
          "discountedSubTotal": 1702586.98,
          "invoices": 81,
          "subTotal": 1634226.98,
          "discount": 1142927.02,
          "taxTotal": 0,
          "previousDue": 0,
          "amount": 1702747,
          "subTotalAmount": 1702586.98
        },
        "TransactionSummary": {
          "totalCreditAmount": 1781333,
          "totalDebitAmount": 10720,
          "transactions": 115,
          "totalCredit": 115,
          "totalDebit": 115
        },
        "ReferralSummary": {
          "totalCount": 17,
          "transactions": 5,
          "totalCreditAmount": 173984,
          "totalDebitAmount": 0,
          "noTransactions": 12
        }
      },
	  
	  
      "particulars": [
        {
          "discription": "Product-item",
          "QTY": "02",
          "Price": "$ 80",
          "Total": "$ 80",
        },
		{
          "discription": "Product-item",
          "QTY": "02",
          "Price": "$ 80",
          "Total": "$ 80",
        },
		{
          "discription": "Product-item",
          "QTY": "02",
          "Price": "$ 80",
          "Total": "$ 80",
        },
		{
          "discription": "Product-item",
          "QTY": "02",
          "Price": "$ 80",
          "Total": "$ 80",
        },
		{
          "discription": "Product-item",
          "QTY": "02",
          "Price": "$ 80",
          "Total": "$ 80",
        }
      ],
  
      "Company": {
        "name": "Pune",
		"phone": "0987654321",
        "bankDetails": {
          "accountNumber": "1234567890",
          
        },
        "contactDetails": {
          "email": "kaapnasiteuser@gmail.com",
          "mobile": "+917517978898",
          "whatsappNumber": "+919049508514",
          "phone": "",
          "website": "http://apnasite.in",
          "tollFreeNo": "",
          "socialLinks": [
            {
              "name": "Facebook",
              "label": "Facebook",
              "url": "https://facebook.com/apnasite",
              "className": "btn btn-link",
              "icon": "bi bi-facebook",
              "type": "Link"
            }
          ]
        },
        "gst": "",
        "logo": "/api/download/localhost/default/apnasite-logo-light.png",
        "address": {
          "phone": "0987654321",
        },
        "darkLogo": "C:\Users\Sanjeevanee\Downloads\logo (1).png"
      },
      "balance": null
    };
  }
  

  render() {
    this.innerHTML = "";

    const wrapper = this.createElement("div", this.config.backgroundDiv);
    wrapper.appendChild(this.renderBackground());
    const content = this.createElement("div", this.config.contentClass);

    content.appendChild(this.renderTitle());
    content.appendChild(this.renderHeader());	
    content.appendChild(this.renderCustomerDetails());
    content.appendChild(this.renderItemsTable());
	content.appendChild(this.renderTotal());
	content.appendChild(this.renderBankDetails());
    content.appendChild(this.renderTerms());
    content.appendChild(this.renderFooter());

    wrapper.appendChild(content);
    this.appendChild(wrapper);
  }

  renderBackground() {
    const bg = this.createElement("div", this.config.backgroundClass);
    [this.config.cir1Class, 
	this.config.dot1Class, this.config.dot2Class, this.config.dot3Class, 
	this.config.dot4Class, this.config.dot5Class, this.config.dot6Class,
	this.config.dot7Class, this.config.dot8Class, this.config.dot9Class,
	
	this.config.rec0Class,this.config.rec2Class, this.config.rec3Class, this.config.rec4Class, 
	this.config.rec5Class, this.config.rec6Class,this.config.rec7Class, this.config.rec8Class, this.config.rec9Class ]
      .forEach(cls => bg.appendChild(this.createElement("div", cls)));
    return bg;
  }

  renderTitle() {
    return this.createElement("h1", this.config.titleClass, this.data.title || "INVOICE");	
  }
  
  
  renderHeader() {
    const header = this.createElement("div", this.config.headerClass);
    header.appendChild(this.renderLogo());
    header.appendChild(this.renderQR());
	header.appendChild(this.renderLoc());
	header.appendChild(this.renderphone());
    header.appendChild(this.renderInvoiceDetails());
    header.appendChild(this.renderCompanyDetails());
    return header;
  }

  renderLogo() {
    const logo = this.createElement("img", this.config.logoClass);
    logo.src = this.data.logo || "https://th.bing.com/th/id/R.59bc9055f17b8a7436fcd713b53c971f?rik=5wDQCm%2fPtvNzVA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftata-png--4924.jpg&ehk=8x%2fDYbnEfJJFolqnAg8tB7GjqEdWO0lybskt5TEgBZY%3d&risl=&pid=ImgRaw&r=0";
    logo.alt = "Logo";
    return logo;
  }

  renderQR() {
    const qr = this.createElement("img", this.config.qrClass);
    qr.src = this.data.qr || "https://support.bitly.com/hc/article_attachments/360096093792/orange_qr.png";
    qr.alt = "QR";
    return qr;
  }
  
   renderLoc() {
    const loc = this.createElement("img", this.config.locClass);
    loc.src = this.data.loc || "https://toppng.com/public/uploads/preview/jpg-free-stock-location-clipart-office-address-orange-location-icon-1156297091567o3movmwj.png";
    loc.alt = "loc";
    return loc;
	
  }
   
    renderphone() {
    const phone = this.createElement("img", this.config.phoneClass);
    phone.src = this.data.phone || "https://webstockreview.net/images/clipart-telephone-phone-orange-17.png";
    phone.alt = "phone";
    return phone;
	
  }
 
  renderInvoiceDetails() {
    const d = this.data;
    const details = this.createElement("div", this.config.detailsClass);
    details.appendChild(this.createElement("div", "invoice-no", `Invoice #: ${d.invoiceNumber || ""}`));
    details.appendChild(this.createElement("div", "invoice-date", `Invoice Date: ${d.invoiceDate || ""}`));
    details.appendChild(this.createElement("div", "invoice-due-date", `Due Date: ${d.dueDate || ""}`));
    details.appendChild(this.createElement("div", "invoice-po-number", `Grand Total ${d.total || ""}`));
    details.appendChild(this.createElement("div", "invoice-price-total", ` ${d.pricetotal || ""}`));
    return details;
  }

  renderCompanyDetails() {
    const d = this.data;
    const div = this.createElement("div", "invoice-company-details");
    div.appendChild(this.createElement("div", "org-name", d.Company.name || ""));
    div.appendChild(this.createElement("div", "org-gst-no", d.Company.gst || ""));
    const addr = this.createElement("div", this.config.addressClass);
    (Object.values(d.Company.address) || []).filter(line => line !== '').forEach(line => addr.appendChild(this.createElement("div", null, line)));
    div.appendChild(addr);
    return div;
  }

  renderCustomerDetails() {
    const d = this.data;
    const section = this.createElement("div", "customer-details-section flex-row gap-16");

    // Billing Address Block
    const billingBlock = this.createElement("span", "customer-address-block flex-1");
    billingBlock.appendChild(this.renderAddressSection("Billing Address", d.Party?.billingAddress, d.Party?.name));
    section.appendChild(billingBlock);

    // Shipping Address Block
    const shippingBlock = this.createElement("span", "customer-address-block flex-1");
    shippingBlock.appendChild(this.renderAddressSection("Shipping Address", d.Party?.shippingAddress, d.Party?.name));
    section.appendChild(shippingBlock);

    return section;
  }

  renderAddressSection(title, addressObj, partyName) {
    const section = this.createElement("div", title.toLowerCase().replace(/\s/g, "-") + "-section");
    section.appendChild(this.createElement("div", this.config.detailsHeaderClass, title));
    const addrDiv = this.createElement("div", "details-cell party-address");
    if (partyName) addrDiv.appendChild(this.createElement("div", "party-name", partyName));
    if (addressObj && typeof addressObj === "object") {
      Object.values(addressObj).forEach(line => {
        if (line) addrDiv.appendChild(this.createElement("span", null, line));
      });
    }
    section.appendChild(addrDiv);
    return section;
  }
  
  renderItemsTable()
   {
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
      allKeys.forEach(key => row.appendChild(this.createTableCell(item[key])));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    itemsDiv.appendChild(table);
    return itemsDiv;
  }
  
   
  renderTotal() {
    return this.createElement("div", this.config.totalClass, `Total ${this.data.amount ?? ""}`);
	
  }

  renderBankDetails() {
    const d = this.Party.bankDetails || {};
    const div = this.createElement("div", this.config.bankDetailsClass);
    div.appendChild(this.createElement("div", null, `Bank: "YES BANK" ${d.bank || ""}`));
    div.appendChild(this.createElement("div", null, `Account: "66789999922445" ${d.account || ""}`));
    div.appendChild(this.createElement("div", null, `IFSC: "YESB0BNA567" ${d.ifsc || ""}`));
    div.appendChild(this.createElement("div", null, `Branch: "Kodihalli" ${d.branch || ""}`));
    return div;
  }

  renderFooter() {
    const div = this.createElement("div", this.config.footerClass);
    div.appendChild(this.createElement("div", null, "Terms"));
    div.appendChild(this.createElement("div", this.config.detailsHeaderClass, "Goods once sold cannot be taken back or exchanged."));
    (this.data.terms || []).forEach(footer => div.appendChild(this.createElement("div", footer)));
    return div;
  }

  renderTerms() {
    const div = this.createElement("div", this.config.termsClass);
    div.appendChild(this.createElement("div", null, "$ 1000"));
    div.appendChild(this.createElement("div", null, "Goods once sold cannot be taken back or exchanged."));
    return div;
  }

  createElement(tag, className, textContent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent !== undefined) el.textContent = textContent;
    return el;
  }

  createTableHeaderCell(text) {
    return this.createElement("th", null, text.charAt(0).toUpperCase() + text.slice(1));
  }

  createTableCell(text) {
    return this.createElement("td", null, text == null ? "" : String(text));
  }

}

class InvoiceFormComponent extends HTMLElement {
  static get observedAttributes() {
    return ["config", "data"];
  }

  constructor() {
    super();
    this.config = this.defaultConfig();
    this.data = this.defaultData();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      try {
        if (name === "config" && newValue) {
          Object.assign(this.config, JSON.parse(newValue));
        }
        if (name === "data" && newValue) {
          Object.assign(this.data, JSON.parse(newValue));
        }
      } catch (e) {
        console.error(`Invalid ${name} JSON:`, e);
      }
      this.render();
    }
  }

  defaultConfig() {
    return {
      formClass: "invoice-form container",
      formLabelClass: "form-label",
      formControlClass: "form-control",
      formRowClass: "form-row",     
      formButtonClass: "btn btn-primary",
      particularsTableClass: "particulars-table table table-striped table-sm table-bordered",
      particularsAddBtnClass: "btn btn-secondary btn-sm",
      particularsRemoveBtnClass: "btn btn-danger btn-sm"
    };
  }
  
  defaultData() {
    return {
      fields: [
        { label: "Date:", type: "date", name: "invoiceDate", row: 1 },
        { label: "Vno:", type: "text", name: "vno", row: 1 },
        { label: "Invoice No:", type: "text", name: "config.invoice_no", row: 1, disabled: true },
        { label: "Company:", type: "text", name: "company", className: "formly-company", autoComplete: true },
        { label: "Godown:", type: "text", name: "config.storageLocationId", row: 2 },
        { label: "Supplier:", type: "text", name: "supplier", row: 3 },
        { label: "Narr:", type: "text", name: "narr", row: 3 },
        { label: "CST/IGST:", type: "select", name: "cst_igst", row: 4, options: [{ label: "CST", value: "CST" }, { label: "IGST", value: "IGST" }] },
        { label: "For LBT:", type: "select", name: "forlbt", row: 4, options: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }] },
        { label: "PO No:", type: "text", name: "po_no", row: 4, required: true },
        {
          label: "Particulars:",
          type: "array",
          name: "particulars",
          row: 2,
          fields: [
            { label: "Name", type: "text", name: "name" },
            { label: "Quantity", type: "number", name: "quantity" },
            { label: "SGST", type: "number", name: "sgst" },
            { label: "CGST", type: "number", name: "cgst" },
            { label: "MRP", type: "number", name: "mrp" },
            { label: "Purchase Rate", type: "number", name: "purchaseRate" },
            { label: "Sale Rate", type: "number", name: "saleRate" },
            { label: "Discount", type: "number", name: "discount" },
            { label: "Discounted Sub Total", type: "number", name: "discountedSubTotal" },
            { label: "Tax Total", type: "number", name: "taxTotal" }
			
          ]
        }
      ],
      particulars: [
        {
          name: "",
          quantity: "",
          sgst: "",
          cgst: "",
          mrp: "",
          saleRate: "",
          discount: "",
        }
      ]
    };
  }

  render() {
    this.innerHTML = "";
    const form = this.createElement("form", this.config.formClass);

    this.data.fields.forEach(field => {
      if (field.type === "array") {
        form.appendChild(this.renderArrayField(field));
      } else {
        const row = this.createElement("div", this.config.formRowClass);
        row.appendChild(this.createLabel(field));
        row.appendChild(this.createInput(field));
        form.appendChild(row);
       
      }
    });
	
    const submitButton = this.createElement("button", this.config.formButtonClass, "Add Product");
    submitButton.type = "submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // Gather main fields
      const mainData = Object.fromEntries(new FormData(form));
      // Gather particulars (array fields)
      const particularsField = this.data.fields.find(f => f.type === "array" && f.name === "particulars");
      let particulars = [];
      if (particularsField) {
        const rows = form.querySelectorAll(".particulars-array-row");
        rows.forEach(row => {
          const obj = {};
          particularsField.fields.forEach(f => {
            const input = row.querySelector(`[name="${f.name}"]`);
            obj[f.name] = input ? input.value : "";
          });
          particulars.push(obj);
        });
      }
      this.dispatchEvent(
        new CustomEvent("submit", {
          detail: { ...mainData, particulars },
          bubbles: true,
          composed: true,
        })
      );
    });

    this.appendChild(form);
  }

  renderArrayField(field) {
    const wrapper = this.createElement("div", this.config.formRowClass);
    wrapper.appendChild(this.createLabel(field));
    const table = this.createElement("table", this.config.particularsTableClass);
    const thead = this.createElement("thead");
    const headerRow = this.createElement("tr");
    field.fields.forEach(f => headerRow.appendChild(this.createElement("th", null, f.label)));
    headerRow.appendChild(this.createElement("th", null, "")); // For remove button
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = this.createElement("tbody");
    (this.data.particulars || []).forEach((particular, idx) => {
      tbody.appendChild(this.renderArrayRow(field, particular, idx));
    });
    table.appendChild(tbody);

    // Add button
    const addBtn = this.createElement("button", this.config.particularsAddBtnClass, "+ Add Row");
    addBtn.type = "button";
    addBtn.addEventListener("click", () => {
      this.data.particulars.push({});
      this.render();
    });

    wrapper.appendChild(table);
    wrapper.appendChild(addBtn);
    return wrapper;
  }

  renderArrayRow(field, particular, idx) {
    const tr = this.createElement("tr", "particulars-array-row");
    field.fields.forEach(f => {
      const td = this.createElement("td");
      const input = this.createElement("input", this.config.formControlClass);
      input.type = f.type || "text";
      input.name = f.name;
      input.value = particular[f.name] || "";
      td.appendChild(input);
      tr.appendChild(td);
	  
    });

    // Remove button
    const tdRemove = this.createElement("td");
    const removeBtn = this.createElement("button", this.config.particularsRemoveBtnClass, "Remove");
    removeBtn.type = "button";
    removeBtn.addEventListener("click", () => {
      this.data.particulars.splice(idx, 1);
      this.render();
    });
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdRemove);
    return tr;
  }

  createLabel(field) {
    const label = this.createElement("label", this.config.formLabelClass, field.label);
    if (field.name) label.htmlFor = field.name;
    return label;
  }

  createInput(field) {
    let input;
    if (field.type === "select") {
      input = this.createElement("select", this.config.formControlClass);
      input.name = field.name;
      (field.options || []).forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        input.appendChild(option);
      });
    } else {
      input = this.createElement("input", this.config.formControlClass);
      input.type = field.type || "text";
      input.name = field.name;
      if (field.disabled) input.disabled = true;
      if (field.required) input.required = true;
      if (field.autoComplete) input.autocomplete = "on";
      if (field.className) input.classList.add(field.className);
    } 
    return input;
  }

  createElement(tag, className, textContent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent !== undefined) el.textContent = textContent;
    return el;
  }
}


// Define the custom element
customElements.define('invoice-form-component', InvoiceFormComponent);
// Define the custom element
customElements.define("invoice-component", InvoiceComponent);

