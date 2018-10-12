import UIKit
import Foundation

// MARK: - Optionals

public class Optionals: UIView {

  // MARK: Lifecycle

  public init(boolParam: Bool?) {
    self.boolParam = boolParam

    super.init(frame: .zero)

    setUpViews()
    setUpConstraints()

    update()
  }

  public convenience init() {
    self.init(boolParam: false)
  }

  public required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  // MARK: Public

  public var boolParam: Bool? { didSet { update() } }

  // MARK: Private

  private var labelView = UILabel()

  private var labelViewTextStyle = TextStyles.body1

  private func setUpViews() {
    labelView.numberOfLines = 0

    addSubview(labelView)
  }

  private func setUpConstraints() {
    translatesAutoresizingMaskIntoConstraints = false
    labelView.translatesAutoresizingMaskIntoConstraints = false

    let labelViewTopAnchorConstraint = labelView.topAnchor.constraint(equalTo: topAnchor)
    let labelViewBottomAnchorConstraint = labelView.bottomAnchor.constraint(equalTo: bottomAnchor)
    let labelViewLeadingAnchorConstraint = labelView.leadingAnchor.constraint(equalTo: leadingAnchor)
    let labelViewTrailingAnchorConstraint = labelView.trailingAnchor.constraint(lessThanOrEqualTo: trailingAnchor)

    NSLayoutConstraint.activate([
      labelViewTopAnchorConstraint,
      labelViewBottomAnchorConstraint,
      labelViewLeadingAnchorConstraint,
      labelViewTrailingAnchorConstraint
    ])
  }

  private func update() {
    labelView.attributedText = labelViewTextStyle.apply(to: "")
    backgroundColor = #colorLiteral(red: 0, green: 0, blue: 0, alpha: 0)
    if boolParam == true {
      labelView.attributedText = labelViewTextStyle.apply(to: "boolParam is true")
      backgroundColor = Colors.green200
    }
    if boolParam == false {
      labelView.attributedText = labelViewTextStyle.apply(to: "boolParam is false")
      backgroundColor = Colors.red200
    }
    if boolParam == nil {
      labelView.attributedText = labelViewTextStyle.apply(to: "boolParam is null")
    }
  }
}