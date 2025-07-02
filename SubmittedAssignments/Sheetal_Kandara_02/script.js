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
    this.addEventListener("submit", (event) => {
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
      rec1Class: "rect-top-1",
      rec2Class: "rect-top-2",
      rec3Class: "rect-top-3",
      rec4Class: "rect-top-dots",
      rec5Class: "rect-bottom-1",
      rec6Class: "rect-bottom-2",
      rec7Class: "rect-bottom-3",
      rec8Class: "rect-bottom-dots",
      rec9Class: "rect-bottom-4",
      cir1Class:"circle-left",
      cir2Class:"circle-right",
      cir3Class:"circle-1",
      cir4Class:"circle-2",
      cir5Class:"circle-3",
      cir6Class:"circle-4",
      lineClass: "line1",
      contentClass: "invoice-content",
      titleClass: "invoice-title",
      headerClass: "invoice-header",  
      logoClass: "invoice-header-logo",
      qrClass: "qr",
      detailsClass: "invoice-details",
      addressClass: "org-address",
      detailsHeaderClass: "details-header",
      tableClass: "content-table",
      tableHeaderClass: "content-header",
      rightAlignClass: "right-align",
      totalClass: "total-amount",
      totalfooterClass:"total-footer",
      bankDetailsClass: "bank-details",
      bankHeaderClass: "bank-header",
      termsClass: "terms primary",
      footerClass: "invoice-footer",
      customerDetailsClass:"customer-details",
      customerHeaderClass:"customer-header",
      termsHeaderClass:"terms-header"

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
            "lng": 73.7917382
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
          "Product Description": "6495957729bd8844641bf4bf",
          "Price": "$1000",
          "Qty": 1,
          "Total": "$1000"
        },
        {
          "Product Description": "6495957729bd8844641bf4bf",
          "Price": "$1000",
          "Qty": 1,
          "Total": "$1000"
        },
       {
          "Product Description": "6495957729bd8844641bf4bf",
          "Price": "$1000",
          "Qty": 1,
          "Total": "$1000"
        },
        {
          "Product Description": "6495957729bd8844641bf4bf",
          "Price": "$1000",
          "Qty": 1,
          "Total": "$1000"
        },
       {
          "Product Description": "6495957729bd8844641bf4bf",
          "Price": "$1000",
          "Qty": 1,
          "Total": "$1000"
        },
       {
          "Product Description": "6495957729bd8844641bf4bf",
          "Price": "$1000",
          "Qty": 1,
          "Total": "$1000"
        },
      ],
      "bankDetails":{
        "accountNo":"0123456978",
        "bankName":"Lorem ipsum",
        "bankAccount":"0123 456 7890",
        "ifscCode": "HDFC0000234"

      },
      "customerDetails":{
        "nameSurename":"sheetal shamlal kandara",
        "phoneNo":"+1234567890",
        "email":"youremail@gamil.com"
      },
      "total":{
        "subtotal":"$60.00",
        "shipping":"$15.00",
        "taxRate":"$1.00"
      },
      /*"logo":"./img/logo1.png",*/

      /*"Company": {
        "name": "Apnasite",
        "bankDetails": {
          "accountNumber": "1234567890",
          "bankName": "HDFC",
          "branch": "Pune",
          "accountHolderName": "Apnasite",
          
          "vpa": "apnasite@ybl"
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
        "logo": "./tata.png",
        "logoAlt": "My Company ",
        "address": {
          "line1": "Hariom plaza",
          "line2": "Kalewadi",
          "location": "Pune H.O",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "india",
          "pincode": "411001"
        },
        "darkLogo": "./img/apnasite-logo-light.png
      },*/
      
       "terms": [
         "Goods once sold cannot be taken back or exchanged.",
        "We are not the manufacturers; the company will stand for warranty as per their terms and conditions."
       ]
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
    this.loadStyles();
  }

  renderBackground() {
    const bg = this.createElement("div", this.config.backgroundClass);
    [this.config.rec1Class, this.config.rec2Class, this.config.rec3Class,
    this.config.rec4Class, this.config.rec5Class, this.config.rec6Class, 
    this.config.rec7Class,this.config.rec8Class,this.config.rec9Class,
    this.config.cir1Class, this.config.cir2Class, this.config.cir3Class, 
    this.config.cir4Class, this.config.cir5Class, this.config.cir6Class]
      .forEach(cls => bg.appendChild(this.createElement("div", cls)));
    return bg;
  }

  renderTitle() {
    return this.createElement("h1", this.config.titleClass, this.data.title || "Invoice");
  }

  renderHeader() {
    const header = this.createElement("div", this.config.headerClass);
    header.appendChild(this.renderLogo());
    header.appendChild(this.renderQR());
    header.appendChild(this.renderInvoiceDetails());
    header.appendChild(this.renderCompanyDetails());
    return header;
  }

  renderLogo() {
    const logo = this.createElement("img", this.config.logoClass);
    logo.src = this.data.logo || "";
    logo.alt = "Logo";
    return logo;
  }

  renderQR() {
    const qr = this.createElement("img", this.config.qrClass);
    qr.src = this.data.qr || "";
    qr.alt = "QR";
    return qr;
  }

  renderInvoiceDetails() {
    const d = this.data;
    const details = this.createElement("div", this.config.detailsClass);
    details.appendChild(this.createElement("div", "invoice-no", `Invoice #: ${d.invoiceNumber || ""}`));
    details.appendChild(this.createElement("div", "invoice-date", `Invoice Date: ${d.invoiceDate || ""}`));
    details.appendChild(this.createElement("div", "invoice-due-date", `Due Date: ${d.dueDate || ""}`));
    details.appendChild(this.createElement("div", "invoice-po-number", `PO Number: ${d.poNumber || ""}`));
    return details;
  }

  renderCompanyDetails() {
    const d = this.data;
    const div = this.createElement("div", "invoice-company-details");
    div.appendChild(this.createElement("div", "org-name", d.companyName || ""));
    div.appendChild(this.createElement("div", "org-gst-no", d.gstNo || ""));
    const addr = this.createElement("div", this.config.addressClass);
    (d.companyAddress || []).forEach(line => addr.appendChild(this.createElement("div", null, line)));
    div.appendChild(addr);
    return div;
  }

  renderCustomerDetails() {
    const d = this.data.customerDetails || {};;
    const div = this.createElement("div", this.config.customerDetailsClass);
    div.appendChild(this.createElement("div", this.config.customerHeaderClass, "Invoice To:"));
    div.appendChild(this.createElement("div","name-surename", `Name Surename: ${d.nameSurname || ""}`));
    div.appendChild(this.createElement("div","phone-no", `Phone No: ${d.phoneNo || ""}`));
    div.appendChild(this.createElement("div", "email", `eamil: ${d.email || ""}`));
    return div;
  }

  renderAddressSection(title, party) {
    const section = this.createElement("div", title.toLowerCase().replace(/\s/g, "-") + "-section");
    section.appendChild(this.createElement("div", this.config.detailsHeaderClass, title));
    const addrDiv = this.createElement("div", "details-cell party-address");
    addrDiv.appendChild(this.createElement("div", "party-name", party?.name || ""));
    (party?.address || []).forEach(line => addrDiv.appendChild(this.createElement("div", null, line)));
    section.appendChild(addrDiv);
    return section;
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
      allKeys.forEach(key => row.appendChild(this.createTableCell(item[key])));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    itemsDiv.appendChild(table);
    return itemsDiv;
  }

  renderTotal() {
    const d =this.data.total || {};
    const div = this.createElement("div", this.config.totalClass);
    div.appendChild(this.createElement("div","subtotal", `Subtotal: ${d.subtotal|| ""}`));
    div.appendChild(this.createElement("div","shipping", `Shipping: ${d.shipping|| ""}`));
    div.appendChild(this.createElement("div","tax-rate", `TaxRate: ${d.taxRate|| ""}`));
    div.appendChild(this.createElement("div", this.config.totalfooterClass, "Total:  $76.00"));
    return div;
  }

  renderBankDetails() {
    const d = this.data.bankDetails || {};
    const div = this.createElement("div", this.config.bankDetailsClass);
    div.appendChild(this.createElement("div", this.config.bankHeaderClass, "Payment info:"));
    div.appendChild(this.createElement("div","account-no", `Account No: ${d.accountNo|| ""}`));
    div.appendChild(this.createElement("div", "bank-name", `Bank Name: ${d.bankName || ""}`));
    div.appendChild(this.createElement("div", "bank-account", `Bank Account: ${d.bankAccount|| ""}`));
    div.appendChild(this.createElement("div", "ifsc-code", `ifscCode: ${d.ifscCode || ""}`));
    return div;
  }

  renderTerms() {
    const div = this.createElement("div", this.config.termsClass);
    div.appendChild(this.createElement("div", this.config.termsHeaderClass, "Terms:"));
    (this.data.terms || []).forEach(term => div.appendChild(this.createElement("div", null, term)));
    return div;
  }

  renderFooter() {
    const div = this.createElement("div", this.config.footerClass);
    div.appendChild(this.createElement("div", null, "Authorized Signature"));
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

  loadStyles() {
    const styleSheet = document.createElement("link");
    styleSheet.rel = "stylesheet";
    styleSheet.href = `./css/style.css`;
    this.appendChild(styleSheet);
  }
}

class InvoiceFormComponent extends HTMLElement {
  static get observedAttributes() { return ['config', 'data']; }
  constructor() {
    super();
    this.config = this.defaultConfig();
    this.data = this.defaultData();
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && newValue) {
      try {
        this[name] = name === 'config' ?
          Object.assign(this.config, JSON.parse(newValue)) :
          Object.assign(this.data, JSON.parse(newValue));
      } catch (e) {
        console.error(`Invalid ${name} JSON`, e);
      }
      this.render();
    }
  }
  defaultConfig() {
    return {
      formClass: 'invoice-form container',
      formRowClass: 'form-row',
      formControlClass: 'form-control',
      formLabelClass: 'form-label',
      formButtonClass: 'btn btn-primary',
      particularsTableClass: 'table table-striped',
      particularsAddBtnClass: 'btn btn-secondary btn-sm',
      particularsRemoveBtnClass: 'btn btn-danger btn-sm',
    };
  }
  defaultData() {
    return {
      fields: [
        { label: 'Date:', type: 'date', name: 'invoiceDate' },
        { label: 'Vno:', type: 'text', name: 'vno' },
        { label: 'Invoice No:', type: 'text', name: 'invoiceNo' },
        { label: 'Company:', type: 'text', name: 'company' },
        { label: 'Godown:', type: 'text', name: 'godown' },
        { label: 'Party:', type: 'text', name: 'party' },
        { label: 'Narration:', type: 'text', name: 'narration' },
        { label: 'PO No:', type: 'text', name: 'poNo' },
        {
          label: 'Particulars:',
          type: 'array',
          name: 'particulars',
          fields: [
            { label: 'Name', type: 'text', name: 'name' },
            { label: 'Qty', type: 'number', name: 'qty' },
            { label: 'GST', type: 'number', name: 'gst' },
            { label: 'MRP', type: 'number', name: 'mrp' },
            { label: 'Sale Rate', type: 'number', name: 'saleRate' },
            { label: 'Discount', type: 'number', name: 'discount' },
          ],
        },
      ],
      particulars: [{ name: '', qty: 1, gst: 0, mrp: 0, saleRate: 0, discount: 0 }],
    };
  }
  render() {
    this.innerHTML = '';
    const form = document.createElement('form');
    form.className = this.config.formClass;
    this.data.fields.forEach(f => {
      if (f.type === 'array') {
        form.appendChild(this.renderArray(f));
      } else {
        const row = document.createElement('div');
        row.className = this.config.formRowClass;
        const label = document.createElement('label');
        label.className = this.config.formLabelClass;
        label.textContent = f.label;
        const input = document.createElement('input');
        input.className = this.config.formControlClass;
        input.type = f.type;
        input.name = f.name;
        row.append(label, input);
        form.appendChild(row);
      }
    });
    const btn = document.createElement('button');
    btn.className = this.config.formButtonClass;
    btn.type = 'submit';
    btn.textContent = 'Add Product';
    form.appendChild(btn);
    form.onsubmit = e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      data.particulars = [];
      form.querySelectorAll('.part-row').forEach(r => {
        const obj = {};
        this.data.fields.find(f => f.type === 'array')
          .fields.forEach(ff => (obj[ff.name] = r.querySelector(`[name="${ff.name}"]`).value));
        data.particulars.push(obj);
      });
      this.dispatchEvent(new CustomEvent('submit', { detail: data, bubbles: true }));
    };
    this.appendChild(form);
  }
  renderArray(field) {
    const wrapper = document.createElement('div');
    wrapper.className = this.config.formRowClass;
    const table = document.createElement('table');
    table.className = this.config.particularsTableClass;
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');
    field.fields.forEach(ff => {
      const th = document.createElement('th');
      th.textContent = ff.label;
      trh.appendChild(th);
    });
    trh.appendChild(document.createElement('th'));
    thead.appendChild(trh);
    const tbody = document.createElement('tbody');
    this.data.particulars.forEach((p, i) => {
      tbody.appendChild(this.renderRow(field, p, i));
    });
    table.append(thead, tbody);
    wrapper.append(table);
    const add = document.createElement('button');
    add.type = 'button';
    add.className = this.config.particularsAddBtnClass;
    add.textContent = '+ Add Row';
    add.onclick = () => {
      this.data.particulars.push({});
      this.render();
    };
    wrapper.append(add);
    return wrapper;
  }
  renderRow(field, rowData, idx) {
    const tr = document.createElement('tr');
    tr.className = 'part-row';
    field.fields.forEach(ff => {
      const td = document.createElement('td');
      const inp = document.createElement('input');
      inp.className = this.config.formControlClass;
      inp.type = ff.type;
      inp.name = ff.name;
      inp.value = rowData[ff.name] || '';
      td.appendChild(inp);
      tr.appendChild(td);
    });
    const td = document.createElement('td');
    const rem = document.createElement('button');
    rem.type = 'button';
    rem.className = this.config.particularsRemoveBtnClass;
    rem.textContent = 'Remove';
    rem.onclick = () => {
      this.data.particulars.splice(idx, 1);
      this.render();
    };
    td.appendChild(rem);
    tr.appendChild(td);
    return tr;
  }
}

// Define the custom element
customElements.define('invoice-form-component', InvoiceFormComponent);
// Define the custom element
customElements.define("invoice-component", InvoiceComponent);
