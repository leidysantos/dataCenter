@RestController
@RequestMapping("/api/recargas")
public class RecargaController {

    @Autowired
    private DataCenterRepository dataCenterRepository;

    // Servicio que lista las recargas registradas
    @GetMapping
    public List<Recarga> getAllRecargas() {
        return dataCenterRepository.findAll();
    }

    // Servicio que obtiene el detalle de una recarga en específico
    @GetMapping("/{id}")
    public Recarga getRecargaById(@PathVariable Long id) {
        return dataCenterRepository.findById(id).orElse(null);
    }

    // Servicio para crear una recarga
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario crearRecarga(@RequestBody Recarga recarga) {
        return dataCenterRepository.save(usuario);
    }

}
