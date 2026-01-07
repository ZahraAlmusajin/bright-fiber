export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          {/* Put your logo in /public/logo.png */}
          <img
            src="/logon.png"
            alt="Logo"
            className="header-logo"
          />
        </div>
      </div>
    </header>
  );
}
