export default function ProfilePopUp({setOpenSignIn}: {setOpenSignIn: Function}) {
  return (
    <div className="flex gap-6 flex-col p-6 bg-white">
      <div className="gap-4 flex items-center">
        <img
          src="/assets/images/user.png"
          alt=""
          className="w-[58px] h-[58px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <h1 className="eh-6 text-black-01">Yelena Stacia</h1>
          <p className="par-1-16 text-grey-01">Platinum Member</p>
        </div>
      </div>

      <hr />

      <div className="gap-3 flex flex-col">
        <h2 className="par-2 font-medium text-grey-01">Wallet</h2>

        <div className="gap-2 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="gap-3 flex items-center">
              <img src="/assets/icons/lenny-balance.svg" alt="" />
              <p className="par-1-16 text-grey-01">Lenny Balance</p>
            </div>
            <p className="par-1-16 text-black-01">$928,28</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="gap-3 flex items-center">
              <img src="/assets/icons/lenny-coins.svg" alt="" />
              <p className="par-1-16 text-grey-01">Lenny Coins</p>
            </div>
            <p className="par-1-16 text-black-01">0.092</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="gap-3 flex flex-col">
        <h2 className="par-2 font-medium text-grey-01">Menu</h2>

        <div className="gap-2 flex flex-col">
          <div className="flex gap-3 items-center" onClick={() => setOpenSignIn(true)}>
            <img src="/assets/icons/purchase.svg" alt="" />
            <p className="par-1-16 text-grey-01">Login</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/assets/icons/purchase.svg" alt="" />
            <p className="par-1-16 text-grey-01">Purchase</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/assets/icons/wishlist.svg" alt="" />
            <p className="par-1-16 text-grey-01">Wishlist</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="/assets/icons/settings.svg" alt="" />
            <p className="par-1-16 text-grey-01">Settings</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex gap-3 items-center">
        <img src="/assets/icons/sign-out.svg" alt="" />
        <p className="par-1-16 text-red-01">Sign Out</p>
      </div>
    </div>
  );
}
