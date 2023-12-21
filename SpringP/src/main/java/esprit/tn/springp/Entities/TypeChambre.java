package esprit.tn.springp.Entities;

import jakarta.persistence.Table;

@Table(name = "TypeChambre")
public enum TypeChambre {
    SIMPLE,
    DOUBLE,
    TRIPLE
}
