import './DeleteAccount.css';

function DeleteAccount() {
  return (
    <div className="mt-8 p-4 border rounded-lg">
      <div>
        <div className="font-semibold">Delete account</div>
        <div className="deleteAccountText font-medium mt-2">
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </div>
        <div className="deleteAccountText font-medium mt-4">
          <button className="deleteButton">Yes, Delete my account</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
