import React from "react";
import { render } from "@testing-library/react";
import { Container } from "../../../src/components/container";
import { describe, test } from "vitest";


describe('Container', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<Container>OK</Container>);
    const container = getByTestId('container');
    expect(container).toBeTruthy();
  });
});