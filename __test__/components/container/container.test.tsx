import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Container } from "../../../src/components/container";

describe('Container', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<Container>OK</Container>);
    const container = getByTestId('container');
    expect(container).toBeTruthy();
  });
});
