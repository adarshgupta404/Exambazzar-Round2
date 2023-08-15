import { useState } from "react";

export default function BankDetails() {
  // {Making an object to store data from the users}
  const [formdata, setFormdata] = useState({
    accHoldname: "",
    accNum: "",
    bankName: "",
    bankCity: "",
    branchName: "",
    rwah: "",
  });
  const [submit, setSubmitted] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      formdata.accHoldname,
      formdata.accNum,
      formdata.bankCity,
      formdata.bankName,
      formdata.branchName,
      formdata.rwah
    );
    alert(
      "Check in the console!" +
        " " +
        formdata.accHoldname +
        " " +
        formdata.accNum +
        " " +
        formdata.bankCity +
        " " +
        formdata.bankName +
        " " +
        formdata.branchName +
        " " +
        formdata.rwah
    );
    setSubmitted(true);
  };

  return (
    <div className="bank-details pt-0 p-4 lg:pl-12 md:w-4/6">
      <h1 className="text-3xl font-semibold pt-8">Update Bank Details</h1>
      <p className="text-xm pt-2 mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>

      <div className="w-100 border-2 rounded p-4  flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <label className="md:flex p-2">
            <p className="font-bold pt-1 pl-4 md:pl-0">ACCOUNT HOLDER NAME</p>
            <input
              type="text"
              disabled={submit}
              name="accHoldname"
              placeholder="ACCOUNT HOLDER NAME"
              onChange={handleInput}
              value={formdata.accHoldname}
              className={`ml-auto border rounded p-1 pl-4 w-full md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
            />
          </label>
          <label className="md:flex p-2">
            <p className="font-bold pt-1 pl-4 md:pl-0">ACCOUNT NUMBER</p>
            <input
              type="text"
              disabled={submit}
              name="accNum"
              placeholder="ACCOUNT NUMBER"
              onChange={handleInput}
              value={formdata.accNum}
              className={`ml-auto border rounded p-1 pl-4 w-full md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
            />
          </label>
          <label className="md:flex p-2 ">
            <p className="font-bold pt-1 pl-4 md:pl-0">IFSC CODE</p>
            <input
              type="text"
              disabled={submit}
              name="ifsc"
              placeholder="IFSC CODE"
              onChange={handleInput}
              className={`ml-auto border rounded p-1 pl-4 w-full md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
              value={formdata.ifsc}
            />
          </label>
          <label className="md:flex p-2">
            <p className="font-bold pt-1 pl-4 md:pl-0">BANK NAME</p>
            <input
              type="text"
              disabled={submit}
              name="bankName"
              placeholder="BANK NAME"
              onChange={handleInput}
              value={formdata.bankName}
              className={`ml-auto border rounded p-1 pl-4 w-full md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
            />
          </label>
          <label className="md:flex p-2">
            <p className="font-bold pt-1 pl-4 md:pl-0">BANK CITY</p>
            <input
              type="text"
              disabled={submit}
              name="bankCity"
              placeholder="BANK CITY"
              onChange={handleInput}
              value={formdata.bankCity}
              className={`ml-auto border rounded p-1 pl-4 w-full md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
            />
          </label>
          <label className="md:flex p-2">
            <p className="font-bold pt-1 pl-4 md:pl-0">BRANCH NAME</p>
            <input
              type="text"
              disabled={submit}
              placeholder="BRANCH NAME"
              name="branchName"
              onChange={handleInput}
              value={formdata.branchName}
              className={`ml-auto border rounded p-1 pl-4 w-full md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
            />
          </label>
          <label className="md:flex p-2">
            <p className="font-bold pt-1 pl-4 md:pl-0">
              RELATION WITH ACCOUNT HOLDER
            </p>
            <input
              type="text"
              disabled={submit}
              name="rwah"
              placeholder="RELATION WITH ACCOUNT HOLDER"
              onChange={handleInput}
              value={formdata.rwah}
              className={`ml-auto border rounded p-1 w-full pl-4 md:w-1/2 ${
                submit ? "bg-green-50" : ""
              }`}
            />
          </label>
          <label className="md:flex p-2">
            <p className="font-bold ml-4 md:ml-0 pt-1">CONSENT</p>
            <div
              className={`md:w-1/2 md:ml-auto p-4 border rounded shadow-lg ${
                submit ? "bg-green-50" : ""
              }`}
            >
              <div className="md:mb-4 flex items-center">
                {!submit ? (
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                  />
                ) : (
                  <></>
                )}
                <span className="ml-2 text-sm text-gray-700">
                  I confirm that the information given in this form is true,
                  complete, and accurate. I understand that in case of incorrect
                  details, Exambazaar will not be responsible for any loss of
                  pay.
                </span>
              </div>
            </div>
          </label>
          <div className="flex">
            {!submit ? (
              <button
                type="submit"
                onClick={handleSubmit}
                className="p-2 px-8 mr-2 ml-auto text-xl bg-green-600 text-white rounded mt-2"
              >
                Save
              </button>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
      <p className="text-center border-b-2 pt-6 pb-2">
        THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
        THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
        EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
      </p>
    </div>
  );
}
