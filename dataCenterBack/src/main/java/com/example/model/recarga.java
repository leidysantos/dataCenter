@Entity
public class Recarga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String operador;
    private Long valor;
    private Long numero;
    private Long idVendedor
    // Getters y setters
}
