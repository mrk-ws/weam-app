"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { SliderItem } from "@/types/slider";
import toast, { Toaster } from 'react-hot-toast';

// نصوص قابلة للتغيير لدعم اللغات
const TEXTS = {
  title: 'العنوان',
  image: 'الصورة',
  description: 'الوصف',
  actions: 'إجراءات',
  add: 'إضافة',
  edit: 'تعديل',
  delete: 'حذف',
  confirmDelete: 'هل أنت متأكد أنك تريد حذف هذا السلايدر؟',
  required: '*',
  noImage: 'لا توجد صورة',
  search: 'بحث...',
};

export default function SliderDashboard() {
  const [sliders, setSliders] = useState<SliderItem[]>([]);
  const [form, setForm] = useState<Partial<SliderItem>>({});
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [alertAnchor, setAlertAnchor] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>("add");

  useEffect(() => {
    fetchSliders();
  }, []);

  async function fetchSliders() {
    const res = await fetch("/api/slider");
    setSliders(await res.json());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // تصفية الشرائح حسب البحث
  const filteredSliders = useMemo(() =>
    sliders.filter(s =>
      s.title?.toLowerCase().includes(search.toLowerCase()) ||
      s.description?.toLowerCase().includes(search.toLowerCase())
    ), [sliders, search]);

  // معاينة الصورة قبل الحفظ
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
    handleChange(e);
  }

  // Modal تأكيد الحذف
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
    let imageUrl = form.image || "";
    try {
      if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0]) {
        const file = fileInputRef.current.files[0];
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }
      if (editId) {
        await fetch("/api/slider", {
          method: "PUT",
          body: JSON.stringify({ ...form, image: imageUrl, _id: editId }),
        });
        toast.success('تم تعديل السلايدر بنجاح');
      } else {
        await fetch("/api/slider", {
          method: "POST",
          body: JSON.stringify({ ...form, image: imageUrl }),
        });
        toast.success('تمت إضافة السلايدر بنجاح');
      }
      setForm({});
      setEditId(null);
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchSliders();
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
      await fetch("/api/slider", {
        method: "DELETE",
        body: JSON.stringify({ _id: id }),
      });
      toast.success('تم حذف السلايدر بنجاح');
      fetchSliders();
    } catch (err) {
      toast.error('حدث خطأ أثناء الحذف');
    } finally {
      setLoading(false);
    }
  }

  function openAddModal() {
    setForm({});
    setEditId(null);
    setPreview(null);
    setModalMode('add');
    setShowModal(true);
  }

  function openEditModal(item: SliderItem) {
    setForm(item);
    setEditId(item._id!);
    setPreview(item.image || null);
    setModalMode('edit');
    setShowModal(true);
  }

  return (
    <div className="p-8 mt-28">
      <Toaster position="top-center" />
      <h2 className="text-2xl text-center font-bold mb-4">إدارة السلايدر</h2>
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold text-lg">قائمة الشرائح</span>
        <button
          onClick={openAddModal}
          className="bg-primaryColor text-white px-4 py-2 rounded shadow hover:bg-primaryColor/90 transition"
        >
          + إضافة جديد
        </button>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">#</th>
            <th className="p-2 border">{TEXTS.title}</th>
            <th className="p-2 border">{TEXTS.image}</th>
            <th className="p-2 border">{TEXTS.description}</th>
            <th className="p-2 border">{TEXTS.actions}</th>
          </tr>
        </thead>
        <tbody>
          {filteredSliders.map((item, idx) => (
            <tr key={item._id}>
              <td className="p-2 border text-center">{idx + 1}</td>
              <td className="p-2 border">{item.title}</td>
              <td className="p-2 border">
                {item.image ? (
                  <img src={item.image} alt="img" className="w-24 h-12 object-cover" />
                ) : (
                  <span className="text-gray-400">{TEXTS.noImage}</span>
                )}
              </td>
              <td className="p-2 border">{item.description}</td>
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
      {/* Modal لإضافة/تعديل السلايدر */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-slate-100 dark:bg-darkTheme p-4 rounded shadow-lg w-full max-w-md text-center relative">
            <button onClick={closeDeleteModal} className="absolute left-2 top-2 text-gray-400 hover:text-red-500 text-xl">×</button>
            <h3 className="font-bold text-lg mb-4">{modalMode === 'add' ? 'إضافة سلايدر جديد' : 'تعديل السلايدر'}</h3>
            <form onSubmit={handleSubmit} className="space-y-3" encType="multipart/form-data">
              <label className="font-semibold">{TEXTS.title}<span className="text-red-500">{TEXTS.required}</span></label>
              <input
                name="title"
                value={form.title || ""}
                onChange={handleChange}
                placeholder={TEXTS.title}
                className="border p-2 rounded w-full"
                required
              />
              <label className="font-semibold">{TEXTS.description}</label>
              <textarea
                name="description"
                value={form.description || ""}
                onChange={handleChange}
                placeholder={TEXTS.description}
                className="border p-2 rounded w-full"
              />
               <div className="flex gap-4 mb-2">
                <div className="flex-1">
                  <label className="block text-right font-semibold text-gray-700 mb-1">نص الزر</label>
                  <input
                    name="buttonText"
                    value={form.buttonText || ""}
                    onChange={handleChange}
                    placeholder="مثال: اعرف المزيد"
                    className="border border-gray-300 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor/30 transition rounded-lg px-3 py-2 w-full text-right bg-white shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-right font-semibold text-gray-700 mb-1">رابط الزر</label>
                  <input
                    name="buttonUrl"
                    value={form.buttonUrl || ""}
                    onChange={handleChange}
                    placeholder="مثال: https://yoursite.com/page"
                    className="border border-gray-300 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor/30 transition rounded-lg px-3 py-2 w-full text-right bg-white shadow-sm"
                  />
                </div>
              </div>
              <hr className="py-2"/>
              <label className="font-semibold">{TEXTS.image}<span className="text-red-500">{TEXTS.required}</span></label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="border p-2 rounded w-full"
                onChange={handleFileChange}
              />
              {(preview || form.image) ? (
                <img src={preview || form.image!} alt="معاينة الصورة" className="w-32 h-20 object-cover mb-2 mx-auto " />
              ) : (
                <div className="w-32 h-20 flex items-center justify-center bg-gray-100 text-gray-400 border mb-2 mx-auto rounded">{TEXTS.noImage}</div>
              )}
             
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
                <button type="button" onClick={() => { setForm({}); setEditId(null); setPreview(null); setShowModal(false); }} className="px-4 py-2 rounded border">إلغاء</button>
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
