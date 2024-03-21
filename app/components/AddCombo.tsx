"use client";

import { useState } from "react";
import SelectCharacters from "./Form/SelectCharacters";
import SelectPosition from "./Form/SelectPosition";

const CreateCombo = () => {
  const [combo, setCombo] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form className="bg-white my-8 p-8 rounded-md shadow-md">
      <div className="flex flex-col my-4 gap-3">
        <SelectCharacters />
        <SelectPosition />
        <textarea
          onChange={(e) => setCombo(e.target.value)}
          name="combo"
          value={combo}
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
          placeholder="Here is the Combo input ! 👇🏽"
        ></textarea>
        <div className="flex justify-end">
          <button
            disabled={isDisabled}
            className="text-sm bg-green-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
            type="submit"
          >
            Create Combosss 🚀
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateCombo;
