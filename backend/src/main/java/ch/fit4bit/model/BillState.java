package ch.fit4bit.model;

public enum BillState {

	OFFEN(0), AUSBEZAHLT(1), FREIGABE_SUPERIOR(2), FREIGABE_FINANCE(3), ABGELEHNT(4), ZUR_FREIGABE_1(5);

	private BillState(int value) {
	}
}
