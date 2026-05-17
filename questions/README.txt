QUESTIONS FOLDER — HOW IT WORKS
================================

Structure:
  questions/
    {Category Name}/
      {Card Label}.txt      ← text question
      {Card Label}.jpg      ← image question (also: .jpeg, .png, .gif, .webp)

Rules:
  - Folder names match the category names from categories.config.js
    with "/" replaced by "-" and "?" removed.
    e.g. "Physics/Space" → folder "Physics-Space"
         "Pechaan Kaun?" → file  "Pechaan Kaun.txt"

  - File name matches the card label (same sanitization).
    If no card label is selected, the fallback file is named after the category itself.

  - The play page checks for .txt / .md first (shows as text),
    then .jpg / .jpeg / .png / .gif / .webp (shows as image).
    First match wins.

  - To add a new question: drop the file in the correct folder.
    No code changes needed.
