import somar from "./sum";

describe("Testando função somar", () => {
  test("Deve somar 2 + 2 e retornar 4", () => {
    const resultado = somar(2, 2);
    expect(resultado).toBe(4);
  });
});
