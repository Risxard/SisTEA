export const deleteCard = (item) => {
    const idToDelete = item.id;

    if (item.type === "inicial") {
      setSelectedInicial((prevSelectedFiguras) => {
        const novoArray = prevSelectedFiguras.filter(
          (item) => item.id !== idToDelete
        );

        if (JSON.stringify(prevSelectedFiguras) !== JSON.stringify(novoArray)) {
          return novoArray;
        }
        return prevSelectedFiguras;
      });
    }
    if (item.type === "figuras") {
      setSelectedFiguras((prevSelectedFiguras) => {
        const novoArray = prevSelectedFiguras.filter(
          (item) => item.id !== idToDelete
        );

        if (JSON.stringify(prevSelectedFiguras) !== JSON.stringify(novoArray)) {
          return novoArray;
        }
        return prevSelectedFiguras;
      });
    }

    setSelectedCard(null);
  };