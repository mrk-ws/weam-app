"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import toast, { Toaster } from 'react-hot-toast';

interface GovernanceItem {
  _id?: string;
  name: string;
  url: string;
  category?: string;
}

// تعريف نوع GovernanceCategory مباشرة هنا
interface GovernanceCategory {
  _id?: string;
  key: string;
  label: string;
}

const TEXTS = {
  name: 'اسم الملف',
  url: 'رابط الملف',
  category: 'القسم',
  actions: 'إجراءات',
  add: 'إضافة',
  edit: 'تعديل',
  delete: 'حذف',
  confirmDelete: 'هل أنت متأكد أنك تريد حذف هذا الملف؟',
  required: '*',
  search: 'بحث...'
};

export default function GovernanceDashboard() {
  const [items, setItems] = useState<GovernanceItem[]>([]);
  const [form, setForm] = useState<Partial<GovernanceItem>>({});
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [alertAnchor, setAlertAnchor] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>("add");

  // إدارة التصنيفات
  const [categories, setCategories] = useState<GovernanceCategory[]>([]);
  const [catForm, setCatForm] = useState<Partial<GovernanceCategory>>({});
  const [editCatId, setEditCatId] = useState<string | null>(null);
  const [catModal, setCatModal] = useState(false);
  const [catLoading, setCatLoading] = useState(false);

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  async function fetchItems() {
    const res = await fetch("/api/governance");
    setItems(await res.json());
  }
  async function fetchCategories() {
    const res = await fetch('/api/governance-categories');
    setCategories(await res.json());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleCatChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCatForm({ ...catForm, [e.target.name]: e.target.value });
  }

  const filteredItems = useMemo(() =>
    items.filter(s =>
      s.name?.toLowerCase().includes(search.toLowerCase())
    ), [items, search]);

  function openDeleteModal(id: string) {
    setDeleteId(id);
    setShowModal(true);
  }
  function closeDeleteModal() {
    setShowModal(false);
    setDeleteId(null);
  }
  async function confirmDelete() {
    if (deleteId) await handleDelete(deleteId);
    closeDeleteModal();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    setAlertAnchor('submit');
    try {
      if (editId) {
        await fetch("/api/governance", {
          method: "PUT",
          body: JSON.stringify({ ...form, _id: editId }),
        });
        toast.success('تم تعديل الملف بنجاح');
      } else {
        await fetch("/api/governance", {
          method: "POST",
          body: JSON.stringify(form),
        });
        toast.success('تمت إضافة الملف بنجاح');
      }
      setForm({});
      setEditId(null);
      fetchItems();
    } catch (err) {
      toast.error('حدث خطأ أثناء العملية');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    setLoading(true);
    setAlert(null);
    setAlertAnchor(id);
    try {
      await fetch("/api/governance", {
        method: "DELETE",
        body: JSON.stringify({ _id: id }),
      });
      toast.success('تم حذف الملف بنجاح');
      fetchItems();
    } catch (err) {
      toast.error('حدث خطأ أثناء الحذف');
    } finally {
      setLoading(false);
    }
  }

  function openAddModal() {
    setForm({});
    setEditId(null);
    setModalMode('add');
    setShowModal(true);
  }
  function openEditModal(item: GovernanceItem) {
    setForm(item);
    setEditId(item._id!);
    setModalMode('edit');
    setShowModal(true);
  }

  // إدارة التصنيفات
  async function handleCatSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCatLoading(true);
    try {
      if (editCatId) {
        await fetch('/api/governance-categories', {
          method: 'PUT',
          body: JSON.stringify({ ...catForm, _id: editCatId }),
        });
        toast.success('تم تعديل القسم بنجاح');
      } else {
        await fetch('/api/governance-categories', {
          method: 'POST',
          body: JSON.stringify(catForm),
        });
        toast.success('تمت إضافة القسم بنجاح');
      }
      setCatForm({});
      setEditCatId(null);
      setCatModal(false);
      fetchCategories();
    } catch {
      toast.error('حدث خطأ أثناء العملية');
    } finally {
      setCatLoading(false);
    }
  }
  async function handleCatDelete(id: string) {
    setCatLoading(true);
    try {
      await fetch('/api/governance-categories', {
        method: 'DELETE',
        body: JSON.stringify({ _id: id }),
      });
      toast.success('تم حذف القسم بنجاح');
      fetchCategories();
    } catch {
      toast.error('حدث خطأ أثناء الحذف');
    } finally {
      setCatLoading(false);
    }
  }
  function openAddCatModal() {
    setCatForm({});
    setEditCatId(null);
    setCatModal(true);
  }
  function openEditCatModal(cat: GovernanceCategory) {
    setCatForm(cat);
    setEditCatId(cat._id!);
    setCatModal(true);
  }

  return (
    <div className="w-full p-8">
      {/* محتوى إدارة ملفات وتصنيفات الحوكمة هنا */}
      {/* إدارة الملفات */}
      <h2 className="text-2xl font-bold my-8 text-center">إدارة ملفات الحوكمة</h2>
      <Toaster position="top-center" />
      {/* إدارة التصنيفات */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">إدارة الأقسام</span>
          <button onClick={openAddCatModal} className="bg-blue-600 text-white px-3 py-1 rounded">+ قسم جديد</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <div key={cat.key} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
              <span>{cat.label}</span>
              <button onClick={() => openEditCatModal(cat)} className="text-blue-600">تعديل</button>
              <button onClick={() => handleCatDelete(cat._id!)} className="text-red-600">حذف</button>
            </div>
          ))}
        </div>
      </div>
      {catModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-full max-w-md">
            <h3 className="font-bold mb-4">{editCatId ? 'تعديل القسم' : 'إضافة قسم جديد'}</h3>
            <form onSubmit={handleCatSubmit} className="space-y-3">
              <input
                name="label"
                value={catForm.label || ''}
                onChange={handleCatChange}
                placeholder="اسم القسم"
                className="border p-2 rounded w-full"
                required
              />
              <input
                name="key"
                value={catForm.key || ''}
                onChange={handleCatChange}
                placeholder="معرف القسم (بالانجليزية)"
                className="border p-2 rounded w-full"
                required
              />
              <div className="flex justify-center gap-2 mt-4">
                <button type="submit" className="bg-primaryColor text-white px-4 py-2 rounded min-w-[100px]" disabled={catLoading}>
                  {catLoading ? 'جارٍ الحفظ...' : 'حفظ'}
                </button>
                <button type="button" onClick={() => setCatModal(false)} className="px-4 py-2 rounded border">إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold text-lg">قائمة الملفات</span>
        <button
          onClick={openAddModal}
          className="bg-primaryColor text-white px-4 py-2 rounded shadow hover:bg-primaryColor/90 transition"
        >
          + إضافة جديد
        </button>
      </div>
      <input
        type="text"
        placeholder={TEXTS.search}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-xs"
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">#</th>
            <th className="p-2 border">{TEXTS.name}</th>
            <th className="p-2 border">{TEXTS.url}</th>
            <th className="p-2 border">{TEXTS.category}</th>
            <th className="p-2 border">{TEXTS.actions}</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, idx) => (
            <tr key={item._id}>
              <td className="p-2 border text-center">{idx + 1}</td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">رابط الملف</a>
              </td>
              <td className="p-2 border">{categories.find(c => c.key === item.category)?.label || '-'}</td>
              <td className="p-2 border flex gap-2 items-center">
                <button onClick={() => openEditModal(item)} className="text-blue-600 mr-2">{TEXTS.edit}</button>
                <div className="relative flex flex-col items-center">
                  {alert && alertAnchor === item._id && (
                    <span className={`mb-1 px-2 py-1 text-xs rounded shadow-lg whitespace-nowrap z-10 ${alert.type === 'success' ? 'bg-green-200 text-green-800 border border-green-400' : 'bg-red-200 text-red-800 border border-red-400'}`}>
                      {alert.message}
                    </span>
                  )}
                  <button onClick={() => openDeleteModal(item._id!)} className="text-red-600">{TEXTS.delete}</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal لإضافة/تعديل ملف */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-slate-100 dark:bg-darkTheme p-4 rounded shadow-lg w-full max-w-md text-center relative">
            <button onClick={closeDeleteModal} className="absolute left-2 top-2 text-gray-400 hover:text-red-500 text-xl">×</button>
            <h3 className="font-bold text-lg mb-4">{modalMode === 'add' ? 'إضافة ملف جديد' : 'تعديل الملف'}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="font-semibold">{TEXTS.name}<span className="text-red-500">{TEXTS.required}</span></label>
              <input
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                placeholder={TEXTS.name}
                className="border p-2 rounded w-full"
                required
              />
              <label className="font-semibold">{TEXTS.url}<span className="text-red-500">{TEXTS.required}</span></label>
              <input
                name="url"
                value={form.url || ""}
                onChange={handleChange}
                placeholder="مثال: /files/vv.pdf أو رابط خارجي"
                className="border p-2 rounded w-full"
                required
              />
              <label className="font-semibold">{TEXTS.category}<span className="text-red-500">{TEXTS.required}</span></label>
              <select
                name="category"
                value={form.category || ""}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              >
                <option value="" disabled>اختر القسم</option>
                {categories.map(cat => (
                  <option key={cat.key} value={cat.key}>{cat.label}</option>
                ))}
              </select>
              {alert && alertAnchor === 'submit' && (
                <span className={`block px-2 py-1 text-xs rounded shadow-lg whitespace-nowrap z-10 ${alert.type === 'success' ? 'bg-green-200 text-green-800 border border-green-400' : 'bg-red-200 text-red-800 border border-red-400'}`}>
                  {alert.message}
                </span>
              )}
              <div className="flex justify-center gap-2 mt-4">
                <button type="submit" className="bg-primaryColor text-white px-4 py-2 rounded min-w-[100px] flex items-center justify-center">
                  {loading && <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>}
                  {modalMode === 'edit' ? TEXTS.edit : TEXTS.add}
                </button>
                <button type="button" onClick={() => { setForm({}); setEditId(null); setShowModal(false); }} className="px-4 py-2 rounded border">إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Modal لتأكيد الحذف */}
      {showModal && deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">{TEXTS.confirmDelete}</p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">{TEXTS.delete}</button>
              <button onClick={closeDeleteModal} className="bg-gray-200 px-4 py-2 rounded">إلغاء</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
