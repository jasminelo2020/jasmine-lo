const columns = document.querySelectorAll(".clothes-column");

columns.forEach((column) => {
    column.addEventListener("dragover", (event) => {
        // Test a custom type we will set later
        if (event.dataTransfer.types.includes("item")) {
            event.preventDefault();
        }
    });
});

const clothes = document.querySelectorAll(".item");

clothes.forEach((item) => {
    item.addEventListener("dragstart", (event) => {
        item.id = "dragged-item";
        event.dataTransfer.effectAllowed = "move";
        // Custom type to identify a item drag
        event.dataTransfer.setData("item", "");
    });

    item.addEventListener("dragend", (event) => {
        item.removeAttribute("id");
    });
});

columns.forEach((column) => {
    column.addEventListener("drop", (event) => {
        event.preventDefault();

        const draggedItem = document.getElementById("dragged-item");
        draggedItem.remove();
        column.children[1].appendChild(draggedItem);
    });
});

function makePlaceholder(draggedItem) {
    const placeholder = document.createElement("li");
    placeholder.classList.add("placeholder");
    placeholder.style.height = `${draggedItem.offsetHeight}px`;
    return placeholder;
}

function movePlaceholder(event) {
    const column = event.currentTarget;
    const draggedItem = document.getElementById("dragged-item");
    const clothes = column.children[1];
    const existingPlaceholder = column.querySelector(".placeholder");

    if (existingPlaceholder) {
        const placeholderRect = existingPlaceholder.getBoundingClientRect();
        if (
            placeholderRect.top <= event.clientY &&
            placeholderRect.bottom >= event.clientY
        ) {
            return;
        }
    }

    for (const item of clothes.children) {
        if (item.getBoundingClientRect().bottom >= event.clientY) {
            if (item === existingPlaceholder) return;
            existingPlaceholder?.remove();
            if (item === draggedItem || item.previousElementSibling === draggedItem)
                return;
            clothes.insertBefore(
                existingPlaceholder ?? makePlaceholder(draggedItem),
                item,
            );
            return;
        }
    }

        existingPlaceholder?.remove();
        if (clothes.lastElementChild === draggedItem) return;
        clothes.append(existingPlaceholder ?? makePlaceholder(draggedItem));
}

columns.forEach((column) => {
    column.addEventListener("dragover", movePlaceholder);
    column.addEventListener("dragleave", (event) => {
        // If we are moving into a child element,
        // we aren't actually leaving the column
        if (column.contains(event.relatedTarget)) return;
        const placeholder = column.querySelector(".placeholder");
        placeholder?.remove();
    });
    column.addEventListener("drop", (event) => {
        event.preventDefault();

        const draggedItem = document.getElementById("dragged-item");
        const placeholder = column.querySelector(".placeholder");
        if (!placeholder) return;
        draggedItem.remove();
        column.children[1].insertBefore(draggedItem, placeholder);
        placeholder.remove();
    });
});