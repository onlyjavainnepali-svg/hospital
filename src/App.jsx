const menuGroups = [
  {
    title: 'Dashboard',
    items: []
  },
  {
    title: 'Registration',
    items: []
  },
  {
    title: 'Human Resource Management',
    items: ['Register Employee', 'Create Login', 'Assign User Roles', 'Shift Management', 'Mark Duty', 'Duty Setting']
  },
  {
    title: 'Admin Settings',
    items: [
      'General Configurations',
      'Hospital Setup',
      'Menu & Page',
      'Service',
      'Sponsor & Packages',
      'Discount Policy',
      'Manage Expense'
    ]
  },
  { title: 'Doctor', items: ['Dr Dashboard'] },
  { title: 'Nurse', items: [] },
  { title: 'Clinical Admin Setting', items: [] }
]

const fields = [
  { label: 'Hospital Name *', placeholder: 'select hospital', type: 'select' },
  { label: 'Department Name *', placeholder: 'select department', type: 'select' },
  { label: 'Sub-Department *', placeholder: 'select sub depar...', type: 'select' },
  { label: 'Employee *', placeholder: 'select employee', type: 'select' },
  { label: 'User Name *', placeholder: 'enter username', type: 'input' },
  { label: 'Password *', placeholder: '', type: 'input' },
  { label: 'Landing Page *', placeholder: 'select landing page', type: 'select' }
]

const tableCols = ['Sr', 'Hospital', 'Department', 'Sub Department', 'Employee', 'User Name', 'Password', 'Is Branch Access', 'Edit']

function InputBox({ label, placeholder, type = 'input' }) {
  return (
    <label className="text-[13px] text-slate-500">
      <span>{label}</span>
      <div className="mt-1 h-9 rounded-sm border border-slate-400 bg-white px-3 text-[14px] text-slate-400 flex items-center justify-between">
        <span>{placeholder}</span>
        {type === 'select' && <span className="text-slate-500">▾</span>}
      </div>
    </label>
  )
}

export default function App() {
  return (
    <div className="h-screen w-screen bg-brand p-1 text-slate-900">
      <div className="flex h-full overflow-hidden rounded-[38px] bg-page">
        <aside className="w-[285px] bg-brand text-white relative pb-20">
          <div className="flex items-center gap-3 px-7 pt-6 pb-7 text-3xl font-bold">
            <span className="rounded-full bg-accent px-3 py-0 text-brand">e</span>
            <span className="text-[38px] leading-none tracking-tight"><span className="text-white">health</span><span className="text-accent">matrix</span></span>
          </div>
          <nav className="h-[calc(100%-120px)] overflow-auto px-5 text-[14px]">
            {menuGroups.map((group) => (
              <div key={group.title} className="mb-3">
                <div className="flex items-center gap-2 py-1 font-semibold opacity-95">
                  <span className="text-xs">⌄</span>
                  <span>{group.title}</span>
                </div>
                {group.items.length > 0 && (
                  <div className="ml-8 mt-1 space-y-1">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className={`rounded-full px-4 py-1.5 font-medium ${
                          item === 'Create Login' ? 'bg-accent text-brand' : 'text-white/95 hover:bg-white/10'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/20 p-4 text-white/90">
            <p className="text-xs">© 2024 All rights reserved.</p>
            <div className="mt-4 space-y-3 text-[42px] leading-none font-medium">
              <p className="text-[18px]">☎ +92 300 212-2769</p>
              <p className="text-[18px]">🟢 +92 300 212-2769</p>
              <p className="text-[18px]">✉ shahidriazkpr@gmail.com</p>
              <p className="text-[18px]">🌐 www.youtube.com/@developerman</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-auto p-3">
          <div className="rounded-2xl bg-page">
            <header className="flex h-16 items-center justify-end rounded-xl bg-white px-8 shadow-sm">
              <p className="mr-5 text-[34px] font-semibold text-slate-700">Dr. Haris ALi</p>
              <div className="h-14 w-14 rounded-full bg-slate-300" />
            </header>

            <section className="mt-3 rounded-md border border-slate-300 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-100 px-3 py-2 text-[32px] font-semibold text-brand">Create Login</div>
              <div className="p-3">
                <div className="grid grid-cols-4 gap-2">
                  {fields.slice(0, 4).map((field) => (
                    <InputBox key={field.label} {...field} />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-[1fr_1fr_1fr_auto] gap-2 items-start">
                  {fields.slice(4).map((field) => (
                    <InputBox key={field.label} {...field} />
                  ))}
                  <label className="ml-2 mt-7 flex items-start gap-2 text-[13px] text-slate-700">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border border-slate-300" />
                    <span className="leading-5">Is<br />Branch<br />Access</span>
                  </label>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="rounded bg-brand px-7 py-2 text-[28px] font-semibold text-white">Create Login</button>
                  <button className="rounded bg-red-500 px-8 py-2 text-[28px] font-semibold text-white">Clear</button>
                </div>
              </div>
            </section>

            <section className="mt-3 rounded-md border border-slate-300 bg-white shadow-sm">
              <div className="grid grid-cols-9 bg-brand px-2 py-1 text-[26px] font-semibold text-white">
                {tableCols.map((col) => (
                  <div key={col} className="truncate px-2 py-1">{col}</div>
                ))}
              </div>
              <div className="flex h-56 flex-col items-center justify-center text-slate-400">
                <div className="text-6xl">🗃️</div>
                <p className="mt-1 text-3xl">No Data</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
