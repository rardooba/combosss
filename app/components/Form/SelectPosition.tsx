"use client";

export default function SelectPosition() {
  return (
    <>
      <label className="text-gray-500">
        📍 Precise the position when the combo begin:
      </label>
      <div className="flex gap-10">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="corner"
              name="corner"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="corner" className="font-medium text-gray-900">
              Corner
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="middle"
              name="middle"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="middle" className="font-medium text-gray-900">
              Middle
            </label>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="anti-air"
              name="anti-air"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="anti-air" className="font-medium text-gray-900">
              Anti-air
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
