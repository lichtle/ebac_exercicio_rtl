import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve inserir dois comentários", () => {
    const { debug } = render(<PostComment />);
    const input = screen.getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: input.value.length > 0 } });
    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));
    fireEvent.change(input, { target: { value: input.value.length > 0 } });
    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));
    debug();
    expect(screen.getByTestId("comentarios").children).toHaveLength(2);
  });
});
