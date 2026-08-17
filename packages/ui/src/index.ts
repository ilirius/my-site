/**
 * @repo/ui — корневой barrel-экспорт.
 *
 * Atomic Design: atoms → molecules → organisms.
 * Сквозные контракты состояния: shared/contracts.
 */

// ─── Контракты состояния (typed-service-contracts) ───
export * from "./shared/contracts/navigation";

// ─── Organisms ───
export * from "./organisms/ThemeSegmentedControl";
export * from "./organisms/icons";
export * from "./organisms/nav-items";
export * from "./organisms/BottomNavBar";
export * from "./organisms/VerticalDock";
export * from "./organisms/SettingsBottomSheet";
